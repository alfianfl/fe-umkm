import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loader, loaderOverlay } from '../../../helpers';
import { editAdministrasiAPI, getTokoByIdAPI } from '../../../models/TokoAPI';
import swal from 'sweetalert';

function StepAdministrasi() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    tahun_toko: '',
    aset: '',
    omset: '',
    tenaga_kerja: '',
    produksi: '',
    wilayah_pemasaran: '',
    satuanTahun: '',
    satuanJual: ''
  });
  useEffect(() => {
    if (id) {
      getTokoByIdAPI(id)
        .then((res) => {
          setInputValue({
            tahun_toko: res.data.data.tahun_toko.match(/\d+/g),
            aset: res.data.data.aset,
            omset: res.data.data.omset,
            tenaga_kerja: res.data.data.tenaga_kerja,
            produksi: res.data.data.produksi.match(/\d+/g),
            wilayah_pemasaran: res.data.data.wilayah_pemasaran,
            satuanJual: res.data.data.produksi.match(/[a-zA-Z]+/g),
            satuanTahun: res.data.data.tahun_toko.match(/[a-zA-Z]+/g)
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
   
    setInputValue({
      ...inputValue,
      [name]:  value
    });
  };

  const editHandler = () => {
    if (
      Object.values(inputValue).some(
        (item) => item === '' || item === null || item.length === 0
      )
    ) {
      swal({
        title: 'Data belum lengkap',
        text: 'Harap isi semua data sebelum menyimpan perubahan',
        icon: 'warning'
      });
    } else {
      const payload = {
        tahun_toko: inputValue.tahun_toko + inputValue.satuanTahun,
        aset: inputValue.aset,
        omset: inputValue.omset,
        tenaga_kerja: inputValue.tenaga_kerja,
        produksi: inputValue.produksi + inputValue.satuanJual,
        wilayah_pemasaran: inputValue.wilayah_pemasaran
      };
      setLoading(true);
      editAdministrasiAPI(payload, id)
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
          <h1>Administrasi Toko</h1>
        </div>
        {loading && loaderOverlay()}
        <div className="p-4 form-content">
          <div className="grid grid-cols-4">
            <div className="flex flex-col form-body col-span-3 mr-4">
              <label
                className="text-left font-semibold mb-2"
                htmlFor="lamaberdiri"
              >
                Lama Toko Berdiri <span className="text-red-400">*</span>
              </label>
              <div
                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
              >
                <input
                  className="  w-full h-12 focus:outline-none pl-2"
                  type="number"
                  placeholder="Sertakan angka lama toko berdiri, Ex: 3"
                  name="tahun_toko"
                  onChange={inputChangeHandler}
                  value={inputValue.tahun_toko}
                  min="0"
                />
              </div>
            </div>
            <div className="form-content">
              <div className="form-body">
                <label
                  className="text-left font-semibold mb-"
                  htmlFor="kategori"
                >
                  Pilih salah satuan <span className="text-red-400">*</span>
                </label>
                <div className="mb-3 w-full">
                  <select
                    className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                    aria-label="Default select example"
                    onChange={inputChangeHandler}
                    name="satuanTahun"
                    value={inputValue.satuanTahun}
                  >
                    <option selected>Pilih salah satuan</option>
                    <option value={'Tahun'}>Tahun</option>
                    <option value={'Bulan'}>Bulan</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="aset">
              Total Aset yang dimiliki <span className="text-red-400">*</span>
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="w-full h-12 focus:outline-none pl-2"
                type="number"
                placeholder="Rp."
                onChange={inputChangeHandler}
                name="aset"
                value={inputValue.aset}
              />
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="omset">
              Omset per Bulan <span className="text-red-400">*</span>
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="  w-full h-12 focus:outline-none pl-2"
                placeholder="Rp."
                type="number"
                name="omset"
                value={inputValue.omset}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="flex flex-col form-body">
              <label className="text-left font-semibold mb-2" htmlFor="tenaga">
                Jumlah Tenaga Kerja <span className="text-red-400">*</span>
              </label>
              <div
                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
              >
                <input
                  className="w-full h-12 focus:outline-none pl-2"
                  placeholder="Ex: 10 orang"
                  onChange={inputChangeHandler}
                  name="tenaga_kerja"
                  value={inputValue.tenaga_kerja}
                />
              </div>
            </div>
            <div className="grid grid-cols-4">
              <div className="flex flex-col form-body col-span-3 mr-4">
                <label
                  className="text-left font-semibold mb-2"
                  htmlFor="tenaga"
                >
                  Jumlah Produksi per Bulan <span className="text-red-400">*</span>
                </label>
                <div
                  className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
                >
                  <input
                    className="  w-full h-12 focus:outline-none pl-2"
                    onChange={inputChangeHandler}
                    placeholder="Sertakan angka produksi per bulan, Ex: 100"
                    name="produksi"
                    value={inputValue.produksi}
                    pattern="[0-9]*"
                    min="0"
                    type="number"
                  />
                </div>
              </div>
              <div className="form-content">
                <div className="form-body">
                  <div className="form-content">
                    <div className="form-body">
                      <label
                        className="text-left font-semibold mb-"
                        htmlFor="kategori"
                      >
                        Pilih salah satuan <span className="text-red-400">*</span>
                      </label>
                      <div className="mb-3 w-full">
                        <select
                          className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                          aria-label="Default select example"
                          onChange={inputChangeHandler}
                          name="satuanJual"
                          value={inputValue.satuanJual}
                        >
                          <option selected>Pilih salah satuan</option>
                          <option value={'Kg'}>Kg</option>
                          <option value={'Pcs'}>Pcs</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col form-body">
              <label
                className="text-left font-semibold mb-2"
                htmlFor="pemasaran"
              >
                Wilayah Pemasaran <span className="text-red-400">*</span>
              </label> 
              <div
                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
              >
                <input
                  className="w-full h-12 focus:outline-none pl-2"
                  placeholder="Wilayah pemasaran produk toko Anda. Contoh : Sumedang, Bandung, Bogor"
                  onChange={inputChangeHandler}
                  name="wilayah_pemasaran"
                  value={inputValue.wilayah_pemasaran}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          className="bg-orange-500 hover:bg-orange-600 text-sm mt-6 text-white font-bold rounded shadow-md px-6 py-2"
          onClick={editHandler}
          style={{ opacity: loading ? 0.6 : 1, width: '100px' }}
          disabled={loading}
        >
          {loading ? loader() : 'Simpan'}
        </button>
      </div>
    </div>
  );
}

export default StepAdministrasi;
