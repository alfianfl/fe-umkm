import React from 'react';

function StepLegalitas() {
  return (
    <div>
      <div className="site-tambah-toko">
        <div className="card-title p-4">
          <h1>Legalitas Toko</h1>
        </div>
        <div className="p-4 form-content">
          <div className="form-content">
            <div className="form-body">
              <label className="text-left font-semibold mb-" htmlFor="kategori">
                Tipe Dokumen
              </label>
              <div className="mb-3 w-full">
                <select
                  className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                  aria-label="Default select example"
                >
                  <option selected>Pilih tipe dokumen bila ada (Optional)</option>
                  <option value={1}>SKU</option>
                  <option value={2}>BPOM</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <label
                htmlFor="formFile"
                className="text-left font-semibold mb-2"
              >
               Dokumen Legalitas Toko
              </label>
              <input
                className="form-input w-full h-12 focus:outline-none p-2 mt-2"
                type="file"
                id="formFile"
                placeholder='Unggah dokumen legalitas toko berupa PDF atau foto'
              />
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

export default StepLegalitas;
