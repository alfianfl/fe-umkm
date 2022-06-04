import React from 'react';

function StepAdministrasi() {
  return (
    <div>
      <div className="site-tambah-toko">
        <div className="card-title p-4">
          <h1>Administrasi Toko</h1>
        </div>
        <div className="p-4 form-content">
          <div className="grid grid-cols-4">
            <div className="flex flex-col form-body col-span-3 mr-4">
              <label
                className="text-left font-semibold mb-2"
                htmlFor="lamaberdiri"
              >
                Lama Toko Berdiri
              </label>
              <div
                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
              >
                <input
                  className="  w-full h-12 focus:outline-none pl-2"
                  type="number"
                  placeholder="Sertakan angka lama toko berdiri, Ex: 3"
                />
              </div>
            </div>
            <div className="form-content">
              <div className="form-body">
                <label
                  className="text-left font-semibold mb-"
                  htmlFor="kategori"
                >
                  Pilih salah satuan
                </label>
                <div className="mb-3 w-full">
                  <select
                    className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                    aria-label="Default select example"
                  >
                    <option selected>Pilih salah satuan</option>
                    <option value={1}>Tahun</option>
                    <option value={2}>Bulan</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="aset">
              Total Aset yang dimiliki
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="w-full h-12 focus:outline-none pl-2"
                type="number"
                placeholder="Rp."
              />
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="omset">
              Omset per Bulan
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="  w-full h-12 focus:outline-none pl-2"
                placeholder="Rp."
                type="number"
              />
            </div>
            <div className="flex flex-col form-body">
              <label className="text-left font-semibold mb-2" htmlFor="tenaga">
                Jumlah Tenaga Kerja
              </label>
              <div
                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
              >
                <input
                  className="w-full h-12 focus:outline-none pl-2"
                  placeholder="Ex: 10 orang"
                />
              </div>
            </div>
            <div className="grid grid-cols-4">
              <div className="flex flex-col form-body col-span-3 mr-4">
                <label
                  className="text-left font-semibold mb-2"
                  htmlFor="tenaga"
                >
                 Jumlah Produksi per Bulan
                </label>
                <div
                  className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
                >
                  <input
                    className="  w-full h-12 focus:outline-none pl-2"
                    placeholder="Sertakan angka produksi per bulan"
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
                        Pilih salah satuan
                      </label>
                      <div className="mb-3 w-full">
                        <select
                          className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                          aria-label="Default select example"
                        >
                          <option selected>Pilih salah satuan</option>
                          <option value={1}>Kg</option>
                          <option value={2}>Pcs</option>
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
                Wilayah Pemasaran
              </label>
              <div
                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
              >
                <input
                  className="w-full h-12 focus:outline-none pl-2"
                  placeholder="Wilayah pemasaran produk toko Anda. Contoh : Sumedang, Bandung, Bogor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-orange-500 hover:bg-orange-600 text-sm text-white font-bold rounded shadow-md px-6 py-2 mt-4">
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
}

export default StepAdministrasi;
