import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import geoJson from './chicago-parks.json';
import MapboxDirections from '@mapbox/mapbox-gl-directions/src/directions';
import tokoDummy from '../../assets/img/tokoDummy.png';
import locationIcon from '../../assets/img/Iconly.svg';
import phoneIcon from '../../assets/img/phone.svg';
import filterIcon from '../../assets/img/FILTER.png';
import { NavLink } from 'react-router-dom';

import './style.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Marker = ({ onClick, children, feature }) => {
  const [activeCardToko, setActiveCardToko] = useState(false);
  const _onClick = (e) => {
    setActiveCardToko(!activeCardToko);
  };

  return (
    <>
      <a href="/toko/1">
        <div
          style={{ display: activeCardToko ? 'block' : 'none' }}
          className="card-toko-point"
        >
          <div className=" max-w-sm rounded overflow-hidden shadow-lg">
            <div className="thumb-img">
              <img
                className="w-full"
                src="https://v1.tailwindcss.com/img/card-top.jpg"
                alt="Sunset in the mountains"
              />
            </div>
            <div className="px-4 py-2">
              <div className="title text-left">
                <div>
                  {' '}
                  <div className="flex items-center justify-between">
                    <h1 className="font-bold">The Coldest Sunset</h1>

                    <button className="bg-orange-500 hover:bg-orange-600 font-bold  text-white rounded shadow-md px-2 ml-2  py-2">
                      Lihat toko
                    </button>
                  </div>
                  <span className="lokasi flex mt-2">
                    {' '}
                    <img className="mr-2" src={locationIcon} alt="" />{' '}
                    <span>Lokasi Kecamatan</span>{' '}
                  </span>
                  <span className="phone flex">
                    {' '}
                    <img className="mr-2" src={phoneIcon} alt="" />{' '}
                    <span>089524013023</span>{' '}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      <button onClick={_onClick} className="marker">
        {children}
      </button>
    </>
  );
};

const dataKategori = [
  'Makanan',
  'Minuman',
  'Pakaian',
  'Elektronik',
  'Aksesoris',
  'Kerajinan',
  'Mainan dan Hobi'
];
const Peta = () => {
  const mapContainerRef = useRef(null);

  const [activeFilter, setActiveFilter] = useState(false);
  const [lng, setLng] = useState(107.523612);
  const [lat, setLat] = useState(-6.8862572);
  const [zoom, setZoom] = useState(10);
  const [listToko, setListToko] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ]);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.addControl(
      new MapboxDirections({ accessToken: mapboxgl.accessToken }),
      'top-right'
    );

    // Render custom marker components
    geoJson.features.forEach((feature) => {
      // Create a React ref
      const ref = React.createRef();
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement('div');
      // Render a Marker Component on our new DOM node
      ReactDOM.render(<Marker feature={feature} />, ref.current);

      // Create a Mapbox Marker at our new DOM node
      new mapboxgl.Marker(ref.current)
        .setLngLat(feature.geometry.coordinates)
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // const markerClicked = () => {
  //   setActiveCardToko(!activeCardToko);
  // };

  const activeDropHandler = () => {
    setActiveFilter(!activeFilter);
  };

  return (
    <div>
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
                <div className="thumb-kategori" key={i}>
                  <span className="kategori">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {listToko.map((item, key) => (
            <NavLink key={key} to={`/toko/1`}>
              <div  className="list-toko-umkm  px-4 py-2">
                <h1>Toko Rangginang Sukamakmur</h1>
                <div className="flex items-start">
                  <div>
                    <div className="lokasi flex ">
                      <img src={locationIcon} alt="" />{' '}
                      <span className="ml-2">
                        Perum Indogreen Blok E5 No 5 RT 5 RW 4, Gunung Sari,
                        Citeureup, Kab.Bogor, Jawa Barat, 16810
                      </span>{' '}
                    </div>
                    <div className="telp flex ">
                      <img src={phoneIcon} alt="" />{' '}
                      <span className="ml-2">089524013023</span>{' '}
                    </div>
                  </div>
                  <div className="thumb-img">
                    <img src={tokoDummy} alt="" />
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Peta;
