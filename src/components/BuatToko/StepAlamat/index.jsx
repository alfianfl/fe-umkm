import ActionButtons from '../ActionButtons';
import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import MapboxDirections from '@mapbox/mapbox-gl-directions/src/directions';
import './style.scss';
mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const StepAlamat = (props) => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(107.523612);
  const [lat, setLat] = useState(-6.8862572);
  const [zoom, setZoom] = useState(10);

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
      'top-left'
    );

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

  const markerClicked = (title) => {
    window.alert(title);
  };

  return (
    <div>
      <div className="site-tambah-toko">
        <div className="card-title p-4">
          <h1>Profil Toko</h1>
        </div>
        <div className="p-4 form-content">
          <div className="grid grid-cols-2 gap-4">
            <div className="form-content">
              <div className="form-body">
                <label
                  className="text-left font-semibold mb-"
                  htmlFor="Kecamatan"
                >
                  Kecamatan 
                </label>
                <div className="mb-3 w-full">
                  <select
                    className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select menu</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col form-body">
              <label className="text-left font-semibold mb-2" htmlFor="nomor">
                Kode Pos
              </label>
              <div
                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
              >
                <input
                  className="w-full h-12 focus:outline-none pl-2"
                  placeholder="Masukan kode pos anda"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="alamat">
              Alamat Lengkap Toko
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <textarea
                className="w-full h-12 focus:outline-none p-2"
                placeholder="Masukan Deskripsi Toko Anda"
              />
            </div>
          </div>
          <div className="form-body lokasi">
            <label className="text-left font-semibold mb-2" htmlFor="alamat">
              Lokasi Toko
            </label>
            <div className='grid'>
              <div className="map-container" ref={mapContainerRef} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <ActionButtons {...props} />
      </div>
    </div>
  );
};
export default StepAlamat;
