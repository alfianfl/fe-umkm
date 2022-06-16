import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTokoByUser } from '../../../../redux/actions/tokoAction';
import {
  createProductAPI,
  editProductAPI,
  getDetailProductAPI
} from '../../../../models/ProductAPI';
import { loader, loaderOverlay } from '../../../../helpers';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const TambahProduk = (props) => {
  const param = useParams();
  let history = useNavigate();
  const [image, setImage] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const listToko = useSelector((state) => state.listToko.toko);
  const [inputValue, setInputValue] = useState({
    nama_produk: '',
    kategori_produk: '',
    harga_produk: '',
    id_toko: '',
    deskripsi: '',
    foto_produk: []
  });
  const listKategori = [
    'Budaya',
    'Fashion',
    'Kuliner',
    'Jasa',
    'Konveksi',
    'Agribisnis'
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue({
      ...inputValue,
      foto_produk: imageFile
    });
  }, [imageFile]);

  useEffect(() => {
    getDetailProductAPI(param.id)
      .then((res) => {
        setInputValue({
          nama_produk: res.data.data.nama_produk,
          kategori_produk: res.data.data.kategori_produk,
          harga_produk: res.data.data.harga_produk,
          id_toko: res.data.data.id_toko,
          deskripsi: res.data.data.deskripsi,
          foto_produk:[]
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    dispatch(fetchTokoByUser());
  }, [dispatch]);

  const handleChangeImage = (e) => {
    setImageFile([...imageFile, ...e.target.files]);
    if (e.target.files.length < 6 && image.length < 5) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setImage((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    } else {
      alert('File maksimal 5');
    }
  };

  const addProductHandler = () => {
    console.log(inputValue);
    if (
      Object.values(inputValue).some(
        (item) => item === '' || item === null || item.length === 0
      )
    ) {
      swal({
        title: 'Data belum lengkap',
        text: 'Harap isi semua data sebelum menyimpan data',
        icon: 'warning'
      });
    } else {
      const newData = new FormData();
      newData.append('nama_produk', inputValue.nama_produk);
      newData.append('id_toko', inputValue.id_toko);
      newData.append('deskripsi', inputValue.deskripsi);
      newData.append('kategori_produk', inputValue.kategori_produk);
      newData.append('harga_produk', inputValue.harga_produk);
      for (const key of Object.keys(inputValue.foto_produk)) {
        newData.append('foto_produk', inputValue.foto_produk[key]);
      }

      setLoading(true);
      if (param.id) {
        editProductAPI(newData, param.id)
          .then((res) => {
            if (res.data.status === 'error') {
              swal('Server Error');
            } else {
              history('/profile/buka-produk');
            }
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
      } else {
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
          createProductAPI(newData)
            .then((res) => {
              if (res.data.status === 'error') {
                swal('Server Error');
              } else {
                history('/profile/buka-produk');
              }
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });
        }
      }
    }
  };
  // render photoimage
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return (
        <img
          src={photo}
          alt="image"
          style={{ objectFit: 'cover' }}
          className="h-full w-full mb-20 cursor-pointer"
          key={photo}
        />
      );
    });
  };

  const inputChangeHandler = (e) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  return (
    <div>
      <div className="site-tambah-toko">
        <div className="card-title p-4">
          <h1>{param.id ? 'Edit' : 'Tambah'} Produk</h1>
        </div>
        {loading && loaderOverlay()}
        <div className="p-4 form-content">
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="nama">
              Nama Produk <span className="text-red-400">*</span>
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="  w-full h-12 focus:outline-none pl-2"
                placeholder="Masukan Nama Toko Anda"
                value={inputValue.nama_produk}
                name="nama_produk"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <label className="text-left font-semibold mb-" htmlFor="kategori">
                Kategori Produk <span className="text-red-400">*</span>
              </label>
              <div className="mb-3 w-full">
                <select
                  className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                  aria-label="Default select example"
                  name="kategori_produk"
                  onChange={inputChangeHandler}
                  value={inputValue.kategori_produk}
                >
                  <option selected value={''}>
                    Select Kategori
                  </option>
                  {listKategori.map((item, i) => (
                    <option key={i} value={item}>
                      {item}{' '}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <label className="text-left font-semibold mb-" htmlFor="toko">
                Pilih Toko <span className="text-red-400">*</span>
              </label>
              <div className="mb-3 w-full">
                <select
                  className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                  aria-label="Default select example"
                  name="id_toko"
                  onChange={inputChangeHandler}
                  value={inputValue.id_toko}
                >
                  <option selected value={''}>
                    Select Toko <span className="text-red-400">*</span>
                  </option>
                  {listToko.map((item, i) => (
                    <option key={i} value={item._id}>
                      {item.nama_toko}{' '}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="nomor">
              Harga <span className="text-red-400">*</span>
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="w-full h-12 focus:outline-none pl-2"
                placeholder="Rp."
                name="harga_produk"
                onChange={inputChangeHandler}
                value={inputValue.harga_produk}
              />
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="deskripsi">
              Deskripsi Produk <span className="text-red-400">*</span>
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <textarea
                className="  w-full h-12 focus:outline-none p-2"
                placeholder="Masukan Deskripsi Toko Anda"
                name="deskripsi"
                onChange={inputChangeHandler}
                value={inputValue.deskripsi}
              />
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <div className="button-image-profile w-1/3 my-2">
                <label
                  className="text-left font-semibold mb-2"
                  htmlFor="grid-last-name"
                >
                  Tambahkan foto (Maksimal 5 foto){' '}
                  <span className="text-red-400">*</span>
                </label>
                <label htmlFor="upload-button1" className="flex">
                  <div className="bg-transparent flex justify-between align-center text-blue-700 font-semibold cursor-pointer  py-1 px-4 border border-blue-500  rounded-2xl">
                    <div
                      className="text-center m-auto"
                      style={{ fontSize: '14px' }}
                    >
                      {' '}
                      Tambah Gambar{' '}
                    </div>
                  </div>
                  <span
                    className="font-light ml-3"
                    style={{ fontSize: '16px' }}
                  ></span>
                </label>
                <input
                  type="file"
                  name="ktp"
                  id="upload-button1"
                  hidden
                  multiple
                  onChange={handleChangeImage}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {renderPhotos(image)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          style={{ opacity: loading ? 0.6 : 1, width: '100px' }}
          disabled={loading}
          onClick={addProductHandler}
          className="bg-orange-500 hover:bg-orange-600 text-lg text-white font-bold rounded shadow-md px-6 py-1"
        >
          {loading ? loader() : 'Simpan'}
        </button>
      </div>
    </div>
  );
};
export default TambahProduk;
