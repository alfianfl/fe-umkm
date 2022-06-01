import ActionButtons from '../ActionButtons';
import { useState } from 'react';
const StepProfile = (props) => {
  const [image, setImage] = useState([]);

  const handleChangeImage = (e) => {
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

  const validate = () => {
    props.nextStep();
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
              Nama Toko
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="  w-full h-12 focus:outline-none pl-2"
                placeholder="Masukan Nama Toko Anda"
              />
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <label className="text-left font-semibold mb-" htmlFor="kategori">
                Kategori Jenis Usaha
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
              No Telepon
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="w-full h-12 focus:outline-none pl-2"
                placeholder="Masukan No Telepon Anda"
              />
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="email">
              Email Toko
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <input
                className="  w-full h-12 focus:outline-none pl-2"
                placeholder="Masukan Email Toko Anda"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-col form-body">
            <label className="text-left font-semibold mb-2" htmlFor="nama">
              Deskripsi Toko
            </label>
            <div
              className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
            >
              <textarea
                className="  w-full h-12 focus:outline-none p-2"
                placeholder="Masukan Deskripsi Toko Anda"
              />
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <label
                htmlFor="formFile"
                className="text-left font-semibold mb-2"
              >
                Logo
              </label>
              <input
                className="form-input w-full h-12 focus:outline-none p-2 mt-2"
                type="file"
                id="formFile"
              />
            </div>
          </div>
          <div className="form-content">
            <div className="form-body">
              <div className="button-image-profile w-1/3 mt-4 mb-2">
                <label
                  className="text-left font-semibold mb-2"
                  htmlFor="grid-last-name"
                >
                  Tambahkan foto (Maksimal 5 foto)
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
      <div className="w-full flex justify-end">
        <ActionButtons {...props} nextStep={validate} />
      </div>
    </div>
  );
};
export default StepProfile;
