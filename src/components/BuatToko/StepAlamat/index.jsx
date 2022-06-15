import ActionButtons from '../ActionButtons';
import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

import { useParams } from 'react-router';
import './style.scss';
import swal from 'sweetalert';
import { getTokoByIdAPI } from '../../../models/TokoAPI';
import { loader, loaderOverlay } from '../../../helpers';
import { editAlamatAPI } from '../../../models/TokoAPI';
mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const StepAlamat = (props) => {
  const mapContainerRef = useRef(null);
  const param = useParams();
  const [inputValue, setInputValue] = useState({
    kode_pos: '',
    kecamatan: '',
    alamat: ''
  });
  const [coordinates, setCoordinates] = useState([]);
  const [lng, setLng] = useState(107.523612);
  const [lat, setLat] = useState(-6.8862572);
  const [zoom, setZoom] = useState(10);
  const [loading, setLoading] = useState(false);

  const getCoordinates = (lng, lat) => {
    setCoordinates([lng, lat]);
  };
  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    // Add the control to the map.
    map.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
      })
    );
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    const geocoder = new MapboxGeocoder({
      mapboxgl: mapboxgl,
      accessToken: mapboxgl.accessToken,
      marker: false
    });

    geocoder.on('result', (e) => {
      const marker = new mapboxgl.Marker({
        draggable: true
      })
        .setLngLat(e.result.center)
        .addTo(map);
      var lngLats = e.result.geometry.coordinates;

      getCoordinates(lngLats[0], lngLats[1]);
      marker.on('dragend', function (e) {
        var lngLat = e.target.getLngLat();
        getCoordinates(lngLat['lng'], lngLat['lat']);
      });
    });
    map.addControl(geocoder);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };
  useEffect(() => {
    setInputValue({
      ...inputValue,
      lokasi: coordinates
    });
  }, [coordinates]);

  useEffect(() => {
    if (param.id) {
      getTokoByIdAPI(param.id)
        .then((res) => {
          setInputValue({
            kode_pos: res.data.data.kode_pos,
            kecamatan: res.data.data.kecamatan,
            alamat: res.data.data.alamat,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [param.id]);
  const handleLastStep = () => {
    if (Object.values(inputValue).some((item) => item === '' || coordinates.length === 0)) {
      swal({
        title: 'Data belum lengkap',
        text: 'Harap isi semua data sebelum menyimpan data',
        icon: 'warning'
      });
    } else {
      props.lastStep();

      props.completeCallback(inputValue);
      // props.dataCallback(inputValue);
    }
  };

  const editHandler = () => {
    if (
      Object.values(inputValue).some(
        (item) => item === '' || coordinates.length === 0
      )
    ) {
      swal({
        title: 'Data belum lengkap',
        text: 'Harap isi semua data sebelum menyimpan data',
        icon: 'warning'
      });
    } else {
      setLoading(true);
      const payload = {
        kode_pos: inputValue.kode_pos,
        kecamatan: inputValue.kecamatan,
        alamat: inputValue.alamat,
        longitude: coordinates[0],
        latitude: coordinates[1]
      };
      editAlamatAPI(payload, param.id)
        .then((res) => {
          if (res.data.status === 'error') {
            swal('Server Error');
          } else {
            swal({
              title: 'Berhasil mengubah data',
              icon: 'success'
            });
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

  return (
    <div>
      <div className="site-tambah-toko">
        <div className="card-title p-4">
          <h1>Profil Toko</h1>
        </div>
        {loading && loaderOverlay()}
        <div className="p-4 form-content">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-content">
              <div className="form-body">
                <label
                  className="text-left font-semibold mb-"
                  htmlFor="Kecamatan"
                >
                  Kecamatan <span className="text-red-400">*</span>
                </label>
                <div className="mb-3 w-full">
                  <select
                    className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                    aria-label="Default select example"
                    name="kecamatan"
                    onChange={inputChangeHandler}
                    value={inputValue.kecamatan}
                  >
                    <option selected>Open this select menu</option>
                    <option value={'Cimahi Utara'}>Cimahi Utara</option>
                    <option value={'Cimahi Selatan'}>Cimahi Selatan</option>
                    <option value={'Cimahi Tengah'}>Cimahi Tengah</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col form-body">
              <label className="text-left font-semibold mb-2" htmlFor="nomor">
                Kode Pos <span className="text-red-400">*</span>
              </label>
              <div
                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
              >
                <input
                  className="w-full h-12 focus:outline-none pl-2"
                  placeholder="Masukan kode pos anda"
                  onChange={inputChangeHandler}
                  value={inputValue.kode_pos}
                  name="kode_pos"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="alamat">
              Alamat Lengkap Toko <span className="text-red-400">*</span>
            </label> 
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <textarea
                className="w-full h-12 focus:outline-none p-2"
                placeholder="Masukan Deskripsi Toko Anda"
                onChange={inputChangeHandler}
                value={inputValue.alamat}
                name="alamat"
              />
            </div>
          </div>
          <div className="form-body lokasi">
            <label className="text-left font-semibold mb-2" htmlFor="alamat">
              Lokasi Toko <span className="text-red-400">*</span>
            </label>
            <div className="grid">
              <div className="map-container" ref={mapContainerRef} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        {param.id ? (
          <button
            className="bg-orange-500 hover:bg-orange-600 text-sm mt-6 text-white font-bold rounded shadow-md px-6 py-2"
            onClick={editHandler}
            style={{ opacity: loading ? 0.6 : 1, width: '100px' }}
            disabled={loading}
          >
            {loading ? loader() : 'Simpan'}
          </button>
        ) : (
          <ActionButtons
            {...props}
            loading={props.loading}
            lastStep={handleLastStep}
          />
        )}
      </div>
    </div>
  );
};
export default StepAlamat;
