import React, { useState, useEffect } from 'react';
import { editLegalitasAPI, getTokoByIdAPI } from '../../../models/TokoAPI';
import { useParams } from 'react-router-dom';
import { loader, loaderCard, loaderOverlay } from '../../../helpers';
import swal from 'sweetalert';

function StepLegalitas() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    tipe_dokumen: '',
    foto_dokumen:null,
    img:''
  });
  useEffect(() => {
    if (id) {
      getTokoByIdAPI(id)
        .then((res) => {
          setInputValue({
            tipe_dokumen: res.data.data.tipe_dokumen,
            img:res.data.data.foto_dokumen || 'test'
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const refetch = () =>{
    if (id) {
      getTokoByIdAPI(id)
        .then((res) => {
          setInputValue({
            tipe_dokumen: res.data.data.tipe_dokumen,
            img:res.data.data.foto_dokumen 
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: name === 'foto_dokumen' ? e.target.files[0] : value
    });
  };

  const editHandler = () => {
    console.log(inputValue);
    if (
      Object.values(inputValue).some(
        (item) => item === '' || item === null 
      )
    ){
      swal({
        title: 'Data belum lengkap',
        text: 'Harap isi semua data sebelum menyimpan perubahan',
        icon: 'warning'
      });
    }
    else{
      const newData = new FormData();
      newData.append('tipe_dokumen', inputValue.tipe_dokumen);
      newData.append('foto_dokumen', inputValue.foto_dokumen);
      setLoading(true)
      editLegalitasAPI(newData, id)
        .then((res) => {
          if (res.data.status === 'error') {
            swal('Server Error');
          } else {
            swal({
              title: 'Berhasil mengubah data',
              icon: 'success'
            });
  
            refetch()
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
          <h1>Legalitas Toko</h1>
        </div>
        {loading && loaderOverlay()}
        <div className="p-4 form-content">
          <div className="form-content">
            <div className="form-body">
              <label className="text-left font-semibold mb-" htmlFor="kategori">
                Tipe Dokumen <span className="text-red-400">*</span>
              </label>
              <div className="mb-3 w-full">
                <select
                  className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                  aria-label="Default select example"
                  value={inputValue.tipe_dokumen}
                  onChange={inputChangeHandler}
                  name="tipe_dokumen"
                >
                  <option value={''} selected>
                    Pilih tipe dokumen bila ada (Optional)
                  </option>
                  <option value={'SKU'}>SKU</option>
                  <option value={'BPOM'}>BPOM</option>
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
                Dokumen Legalitas Toko <span className="text-red-400 text-sm">* (masukan kembali foto legalitas sebelum menyimpan data)</span>
              </label>
              <input
                className="form-input w-full h-12 focus:outline-none p-2 mt-2"
                type="file"
                id="formFile"
                onChange={inputChangeHandler}
                name="foto_dokumen"
                placeholder="Unggah dokumen legalitas toko berupa PDF atau foto"
              />
            </div>

            <h1 className='font-bold text-sm mt-6 mb-2'>Preview Foto Legalitas Yang sebelumnya diupload</h1>
       
            <img style={{width:'100%', objectFit:'cover', height:'auto'}} src={inputValue.img} alt="" />
            
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

export default StepLegalitas;
