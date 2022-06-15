import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import MapboxDirections from '@mapbox/mapbox-gl-directions/src/directions';
import locationIcon from '../../assets/img/Iconly.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToko } from '../../redux/actions/tokoAction';
import phoneIcon from '../../assets/img/phone.svg';
import filterIcon from '../../assets/img/FILTER.png';
import { NavLink } from 'react-router-dom';
import './style.css';
import { loaderCard, loaderOverlay, trimString } from '../../helpers';
import { getTokoAPI } from '../../models/TokoAPI';

// mapboxgl.accessToken =
//   'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2VlZGVkdXNlcjIiLCJhIjoiY2w0Ymp3dWdhMW4wYjNqbHJpNmlyNmNobSJ9.SOwCYgpXJb_hfw2QsIbQzQ';

const Marker = ({ onClick, children, feature, data }) => {
  const [activeCardToko, setActiveCardToko] = useState(false);
  const [id, setId] = useState(0);
  const _onClick = (e) => {
    setActiveCardToko(!activeCardToko);
    setId(data._id);
  };

  return (
    <>
      <div
        style={{
          display: activeCardToko && data._id === id ? 'block' : 'none'
        }}
        className="card-toko-point"
      >
        <div className=" max-w-sm rounded overflow-hidden shadow-lg">
          <div className="thumb-img">
            <img
              className="w-full aspect-ratio"
              src={data.galeri[0].url}
              alt="Sunset in the mountains"
            />
          </div>
          <div className="px-4 py-2">
            <div className="title text-left">
              <div>
                {' '}
                <div className="flex items-center justify-between">
                  <h1 className="font-bold">{data.nama_toko}</h1>
                  <a href={`/toko/${data._id}`}>
                    <button className="bg-orange-500 hover:bg-orange-600 font-bold  text-white rounded shadow-md px-2 ml-2  py-2">
                      Lihat toko
                    </button>
                  </a>
                </div>
                <span className="lokasi flex mt-2">
                  {' '}
                  <img className="mr-2" src={locationIcon} alt="" />{' '}
                  <span>{data.kecamatan}</span>{' '}
                </span>
                <span className="phone flex">
                  {' '}
                  <img className="mr-2" src={phoneIcon} alt="" />{' '}
                  <span>{data.telp_toko}</span>{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button onClick={_onClick} className="marker">
        {children}
      </button>
    </>
  );
};

const dataKategori = [
  'Budaya',
  'Fashion',
  'Kuliner',
  'Jasa',
  'Konveksi',
  'Agribisnis'
];
const Peta = () => {
  const mapContainerRef = useRef(null);
  const listToko = useSelector((state) => state.listToko.toko);
  const [totalToko, setTotalToko] = useState([]);
  const [activeKategori, setActiveKategori] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const loading = useSelector((state) => state.listToko.loading);
  const dispatch = useDispatch();
  const [activeFilter, setActiveFilter] = useState(false);
  const [lng, setLng] = useState(107.523612);
  const [lat, setLat] = useState(-6.8862572);
  const [zoom, setZoom] = useState(10);

  useEffect(() => {
    dispatch(fetchToko());
  }, [dispatch]);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        controls: { instructions: true }
      }),
      'top-right'
    );

    // Render custom marker components
    listToko.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement('div');
      // Render a Marker Component on our new DOM node
      ReactDOM.render(<Marker feature={feature} data={feature} />, ref.current);

      console.log(feature.lokasi.coordinates);

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.lokasi.coordinates)
        .addTo(map);
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, [listToko]);

  useEffect(()=>{
    setIsLoading(true)
    getTokoAPI().then(res=>{
      setTotalToko(res.data.data)
      setIsLoading(false)
    }).catch(err=>{
      console.log(err);
      setIsLoading(false)
    })
  },[])

  const activeDropHandler = () => {
    setActiveFilter(!activeFilter);
  };

  const categoryHandler = (name) => {
    setActiveKategori(name);
    dispatch(fetchToko(`/kategori?ctg=${name}`));
  };

  return (
    <div>
        {
          isLoading &&
          loaderOverlay()
        }
      <div className="sidebarStyle">
        <div className="contailer-side mt-36">
          <div className="input-group relative flex items-stretch w-full px-4">
            <input
              type="text"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Pencarian Toko UMKM"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                />
              </svg>
            </button>
          </div>
          <div className="filter pb-4 px-4 pt-2">
            <button
              onClick={activeDropHandler}
              className="w-full text-bold flex justify-center items-center "
            >
              {' '}
              <img className="mr-2" src={filterIcon} alt="" /> Filter
            </button>
            <div
              className="categories"
              style={{ display: activeFilter ? 'block' : 'none' }}
            >
              {dataKategori.map((item, i) => (
                <div
                  onClick={() => categoryHandler(item)}
                  className="thumb-kategori"
                  key={i}
                >
                  <span className="kategori">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {listToko.map((item, key) => (
            <NavLink key={key} to={`/toko/${item._id}`}>
              <div className="list-toko-umkm  px-4 py-2">
                <div className="flex mb-2">
                  <h1>{item.nama_toko}</h1>{' '}
                  <button className="bg-orange-500 ml-2 text-white py-1 px-2 rounded-2xl text-sm font-bold ">
                    {item.sektor_usaha}
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="col-span-3">
                    <div className="lokasi flex">
                      <img src={locationIcon} alt="" />{' '}
                      <span className="ml-2 desc">
                        {trimString(item.deskripsi_toko, 35)} {item.kecamatan},{' '}
                        {item.kode_pos}
                      </span>{' '}
                    </div>
                    <div className="telp flex">
                      <img src={phoneIcon} alt="" />{' '}
                      <span className="ml-2">{item.telp_toko}</span>{' '}
                    </div>
                  </div>
                  <div className="thumb-img7">
                    <img
                      className="rounded-50"
                      src={item?.galeri[0]?.url}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      {loading ? (
        <div>{loaderCard()} </div>
      ) : (
        <div className="map-container" ref={mapContainerRef} />
      )}
      <div className="card-legenda-1 p-4">
        {
          activeKategori !== '' ?
        <div className='div-1'>
          <h1 style={{ fontSize: '18px' }}>
            Jumlah UMKM {activeKategori} Dalam setiap Kecamatan
          </h1>
          <div className="lokasi flex flex-col mt-2">
            <span>
              Cimahi Utara :{' '}
              {
                listToko.filter((item) => item.kecamatan === 'Cimahi Utara')
                  .length
              }
            </span>
            <span>
              Cimahi Tengah :{' '}
              {
                listToko.filter((item) => item.kecamatan === 'Cimahi Tengah')
                  .length
              }
            </span>
            <span>
              Cimahi Selatan :{' '}
              {
                listToko.filter((item) => item.kecamatan === 'Cimahi Selatan')
                  .length
              }
            </span>
          </div>
        </div> : ''
        }
        <div className='div-2' style={{top: activeKategori !== '' ? '' : '100px'}}>
          <h1 style={{ fontSize: '18px' }}>
            Jumlah Seluruh UMKM di Setiap Sektor Usaha
          </h1>
          <div className="lokasi flex flex-col mt-2">
            {dataKategori.map((items, i) => (
              <span key={i}>
                {items} :{' '}
                {totalToko.filter((item) => item.sektor_usaha === items).length}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peta;
