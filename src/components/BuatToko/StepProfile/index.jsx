import ActionButtons from '../ActionButtons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import swal from 'sweetalert';
import { editTokoByIdAPI, getTokoByIdAPI } from '../../../models/TokoAPI';
import { loader, loaderCard, loaderOverlay } from '../../../helpers';

const StepProfile = (props) => {
  const [image, setImage] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const [inputValue, setInputValue] = useState({
    nama_toko: '',
    sektor_usaha: '',
    telp_toko: '',
    email_toko: '',
    deskripsi_toko: '',
    logo: null,
    gallery: null
  });

  useEffect(() => {
    setInputValue({
      ...inputValue,
      gallery: imageFile
    });
  }, [imageFile]);

  useEffect(() => {
    if (param.id) {
      getTokoByIdAPI(param.id)
        .then((res) => {
          setInputValue({
            nama_toko: res.data.data.nama_toko,
            sektor_usaha: res.data.data.sektor_usaha,
            telp_toko: res.data.data.telp_toko,
            email_toko: res.data.data.email_toko,
            logo: null,
            gallery: [],
            deskripsi_toko: res.data.data.deskripsi_toko,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [param.id]);

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
      [name]: name === 'logo' ? e.target.files[0] : value
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
      const newData = new FormData();
      newData.append('nama_toko', inputValue.nama_toko);
      newData.append('sektor_usaha', inputValue.sektor_usaha);
      newData.append('telp_toko', inputValue.telp_toko);
      newData.append('email_toko', inputValue.email_toko);
      newData.append('deskripsi_toko', inputValue.deskripsi_toko);
      newData.append('logo', inputValue.logo);
      for (const key of Object.keys(inputValue.gallery)) {
        newData.append('gallery', inputValue.gallery[key]);
      }
      setLoading(true);

      editTokoByIdAPI(newData, param.id)
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

  const validate = () => {
    if (
      Object.values(inputValue).some(
        (item) => item === '' || item === null || item.length === 0
      )
    ) {
      swal({
        title: 'Data belum lengkap',
        text: 'Harap isi semua data sebelum lanjut ke tahap berikutnya',
        icon: 'warning'
      });
    } else {
      props.nextStep();
      props.dataCallback(inputValue);
      // console.log(inputValue)
    }
  };
  return (
    <div>
      <div className="site-tambah-toko">
        <div className="card-title p-4">
          <h1>Profil Toko</h1>
        </div>
        <div className="p-4 form-content">
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="nama">
              Nama Toko <span className="text-red-400">*</span>
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="  w-full h-12 focus:outline-none pl-2"
                placeholder="Masukan Nama Toko Anda"
                name="nama_toko"
                onChange={inputChangeHandler}
                value={inputValue.nama_toko}
              />
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <label className="text-left font-semibold mb-" htmlFor="kategori">
                Kategori Jenis Usaha <span className="text-red-400">*</span>
              </label>
              <div className="mb-3 w-full">
                <select
                  className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                  aria-label="Default select example"
                  name="sektor_usaha"
                  onChange={inputChangeHandler}
                  value={inputValue.sektor_usaha}
                >
                  <option selected>Open this select menu</option>
                  <option value={'Budaya'}>Budaya</option>
                  <option value={'Fashion'}>Fashion</option>
                  <option value={'Kuliner'}>Kuliner</option>
                  <option value={'Konveksi'}>Konveksi</option>
                  <option value={'Jasa'}>Jasa</option>
                  <option value={'Agribisnis'}>Agribisnis</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="nomor">
              No Telepon <span className="text-red-400">*</span>
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="w-full h-12 focus:outline-none pl-2"
                placeholder="Masukan No Telepon Anda"
                name="telp_toko"
                onChange={inputChangeHandler}
                value={inputValue.telp_toko}
              />
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="email">
              Email Toko <span className="text-red-400">*</span>
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="  w-full h-12 focus:outline-none pl-2"
                placeholder="Masukan '-' jika tidak memiliki email"
                type="email"
                name="email_toko"
                value={inputValue.email_toko}
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="nama">
              Deskripsi Toko <span className="text-red-400">*</span>
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <textarea
                className="  w-full h-12 focus:outline-none p-2"
                placeholder="Masukan Deskripsi Toko Anda"
                name="deskripsi_toko"
                onChange={inputChangeHandler}
                value={inputValue.deskripsi_toko}
              />
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <label
                htmlFor="formFile"
                className="text-left font-semibold mb-2"
              >
                Logo <span className="text-red-400 text-sm">* (masukan kembali foto logo sebelum menyimpan data)</span>
              </label>
              <input
                className="form-input w-full h-12 focus:outline-none p-2 mt-2"
                type="file"
                id="formFile"
                name="logo"
                onChange={inputChangeHandler}
              />
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <div className="button-image-profile w-full mt-4 mb-2">
                <label
                  className="text-left font-semibold mb-2"
                  htmlFor="grid-last-name"
                >
                  Tambahkan foto (Maksimal 5 foto) <span className="text-red-400 text-sm">* (masukan kembali foto toko sebelum menyimpan data)</span>
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
        {
          loading &&
          loaderOverlay()
        }
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
          <ActionButtons {...props} nextStep={validate} />
        )}
      </div>
    </div>
  );
};
export default StepProfile;
