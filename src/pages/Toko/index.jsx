import React, { useState, useEffect } from 'react';
import CardToko from '../../components/Commons/Card/CardToko';
import locationIcon from '../../assets/img/Iconly.svg';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToko } from '../../redux/actions/tokoAction';
import { loaderCard } from '../../helpers';
import kategoriIcon from '../../assets/img/kategori.svg';

const listKecamatan = [
  {
    nama: 'Cimahi Utara',
    value: 'Cimahi Utara'
  },
  {
    nama: 'Cimahi Tengah',
    value: 'Cimahi Tengah'
  },
  {
    nama: 'Cimahi Selatan',
    value: 'Cimahi Selatan'
  }
];

const listKategori = [
  {
    nama: 'Budaya'
  },
  {
    nama: 'Fashion'
  },
  {
    nama: 'Kuliner'
  },
  {
    nama: 'Jasa'
  },
  {
    nama: 'Konveksi'
  },
  {
    nama: 'Agribisnis'
  },
];
function Toko() {
  const [inputValue, setInputValue] = useState('');
  const [inputLokasi, setInputLokasi] = useState([]);
  const listToko = useSelector((state) => state.listToko.toko);
  const isLoading = useSelector((state) => state.listToko.loading);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    dispatch(fetchToko(`/search?q=${inputValue}`));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      dispatch(fetchToko(`/search?q=${inputValue}`));
    }
  };

  const lokasiHandlerChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;

    // Case 1 : The user checks the box
    if (checked) {
      setInputLokasi([...inputLokasi, value]);
    }

    // Case 2  : The user unchecks the box
    else {
      setInputLokasi(inputLokasi.filter((e) => e !== value));
    }
  };
  const lokasiHandler = (e) => {
    dispatch(
      fetchToko(
        `/lokasi?lks=${inputLokasi[0]}&lks=${inputLokasi[1] || ''}&lks=${
          inputLokasi[2] || ''
        }`
      )
    );
  };

  const categoryHandler = (name) => {
    dispatch(fetchToko(`/kategori?ctg=${name}`));
  };

  useEffect(() => {
    dispatch(fetchToko());
  }, [dispatch]);
  return (
    <div className="container site-main-toko mx-auto mt-40">
      <div className="grid gap-8 grid-cols-4">
        <div className="text-left  ">
          <h1 className="mb-3 font-bold">Filter</h1>
          <div className="filter-thumb  p-6">
            <span className="lokasi flex">
              {' '}
              <img src={locationIcon} alt="" />{' '}
              <span className="ml-2 font-semibold">Lokasi</span>{' '}
            </span>

            <div className="flex ">
              <div>
                {listKecamatan.map((item, i) => (
                  <div key={i} className="form-check">
                    <input
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-500 checked:border-orange-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      defaultValue
                      value={item.value}
                      id="flexCheckDefault"
                      onChange={lokasiHandlerChange}
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexCheckDefault"
                    >
                      {item.nama}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={lokasiHandler}
              disabled={inputLokasi.length === 0}
              style={{ opacity: inputLokasi.length === 0 ? 0.6 : 1 }}
              className="bg-orange-500 button-filter w-full hover:bg-orange-600 text-lg text-white font-bold rounded shadow-md px-6 py-1"
            >
              Terapkan
            </button>
          </div>
          <div className="filter-thumb  p-6 mt-8">
            <span className="lokasi flex">
              {' '}
              <img src={kategoriIcon} alt="" />{' '}
              <span className="ml-2 font-semibold">Sektor Usaha</span>{' '}
            </span>

            <div className="flex flex-col">
              {listKategori.map((kategori, index) => (
                <div
                  key={index}
                  onClick={() => categoryHandler(kategori.nama)}
                  className="thumb-kategori"
                >
                  <span>{kategori.nama}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3">
            <div className="title text-left">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.788 2.30169L13.8644 8.53765H3.46832L5.28997 3.38903C5.40368 3.06865 5.61376 2.79133 5.89138 2.59513C6.169 2.39892 6.50054 2.29346 6.84049 2.29321L14.788 2.30169Z"
                  fill="#F86400"
                />
                <path
                  d="M23.0827 2.30176L24.0063 8.53773H16.1407L17.0614 2.30176H23.0827Z"
                  fill="#F86400"
                />
                <path
                  d="M36.5291 8.53773H26.2827L25.3563 2.30176H33.1089C33.462 2.30119 33.8067 2.4093 34.0962 2.6114C34.3857 2.81351 34.606 3.09982 34.7272 3.43146L36.5291 8.53773Z"
                  fill="#F86400"
                />
                <path
                  d="M15.7426 10.4863V16.7195H24.3989V10.4863H15.7426ZM26.3477 10.4863V16.7195H32.8435V23.2576H7.25566V16.7195H13.7938V10.4863H3.46832V15.7338C3.46832 15.9952 3.57217 16.2459 3.75702 16.4308C3.94187 16.6156 4.19257 16.7195 4.45399 16.7195H5.30127V34.9529C5.30127 35.2068 5.40214 35.4503 5.58169 35.6299C5.76124 35.8094 6.00477 35.9103 6.25869 35.9103H33.7585C34.0132 35.9103 34.2574 35.8091 34.4375 35.6291C34.6176 35.449 34.7188 35.2047 34.7188 34.9501V16.7195H35.5406C35.672 16.7198 35.8022 16.6942 35.9237 16.6441C36.0451 16.594 36.1555 16.5204 36.2484 16.4275C36.3413 16.3346 36.415 16.2242 36.4651 16.1027C36.5152 15.9813 36.5408 15.8511 36.5404 15.7197V10.4863H26.3477Z"
                  fill="#F86400"
                />
                <path
                  d="M36.4105 34.1226H3.58698V35.9103H36.4105V34.1226Z"
                  fill="#7A8B99"
                />
                <path
                  d="M38.1389 35.9104H1.86127V37.6982H38.1389V35.9104Z"
                  fill="#6A7987"
                />
              </svg>

              <h1 className="ml-4 font-bold">Toko UMKM </h1>
            </div>
            <div className="mb-3 col-span-2">
              <div className="input-group relative flex items-stretch w-full mb-4">
                <input
                  type="text"
                  className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Pencarian Toko UMKM"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                  onClick={searchHandler}
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
            </div>
          </div>
          {isLoading ? (
            <div className="flex justify-center">{loaderCard()}</div>
          ) : listToko.length === 0 ? (
            <div className="flex justify-center">
              <div className="w-1/2">
                <div>
                  <img src="https://img.freepik.com/free-vector/no-data-concept-illustration_203587-28.jpg?w=2000" />
                  <h1 className="text-center">Oppss...Data tidak ditemukan</h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-4">
              {listToko.map((item, index) => (
                <CardToko item={item} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Toko;
