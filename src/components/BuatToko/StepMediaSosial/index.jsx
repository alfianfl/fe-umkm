import ActionButtons from '../ActionButtons';
import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import './style.scss';
import plus from '../../../assets/img/plus.svg';
import { useParams } from 'react-router';
import { editMedsosAPI, getTokoByIdAPI } from '../../../models/TokoAPI';
import { loader, loaderOverlay } from '../../../helpers';
import swal from 'sweetalert';

const StepMediaSosial = (props) => {
  const param = useParams();
  const [loading, setLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    sosial_media: [
      {
        platform_sosmed: '',
        nama_sosmed: '',
        link_sosmed: ''
      }
    ]
  });
  useEffect(() => {
    if (param.id) {
      getTokoByIdAPI(param.id)
        .then((res) => {
          setInitialValues({
            ...initialValues,
            sosial_media: res.data.data.sosial_media
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [param.id]);

  const editHandler = (val) => {
    setLoading(true);
    editMedsosAPI(val, param.id)
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
  };
  const validate2 = (val) => {
    props.nextStep();
    props.dataCallback(val);
    // console.log(val);
  };
  return (
    <div className="site-media-sosial">
      <div className="title">
        <h1>Media Sosial / Toko Online</h1>
        <p>
          Anda dapat melewati tahap ini apabila belum mempunyai media sosial
          atau toko online.
        </p>
      </div>
      {
          loading &&
          loaderOverlay()
        }
      <Formik enableReinitialize={true} initialValues={initialValues}>
        {({ values }) => (
          <Form>
            <FieldArray name="sosial_media">
              {({ insert, remove, push }) => (
                <div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-orange-500 flex items-center hover:bg-orange-600 font-bold text-white rounded text-sm shadow-md px-6 py-2"
                      onClick={() =>
                        push({
                          platform_sosmed: '',
                          nama_sosmed: '',
                          link_sosmed: ''
                        })
                      }
                      disabled={values.sosial_media.length === 6}
                      style={{
                        opacity:
                          values.sosial_media.length === 6 ? 0.6 : 1
                      }}
                    >
                      <img src={plus} className="mr-1" alt="" /> Tambah Media
                      Sosial
                    </button>
                  </div>
                  {values.sosial_media.length > 0 &&
                    values.sosial_media.map((sosmed, index) => (
                      <div className="thumb-media-sosial p-4 mt-4" key={index}>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-red-600 font-bold text-white rounded shadow-md px-6 text-sm py-2"
                            onClick={() => remove(index)}
                            disabled={values.sosial_media.length === 1}
                            style={{
                              opacity:
                                values.sosial_media.length === 1 ? 0.6 : 1
                            }}
                          >
                            Hapus
                          </button>
                        </div>
                        <div className="form-content">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="form-body">
                              <label className="text-left font-semibold">
                                Platform Media Sosial / Toko Online
                              </label>
                              <div className="mb-3 w-full">
                                <Field
                                  className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                                  aria-label="Default select example"
                                  as="select"
                                  name={`sosial_media.${index}.platform_sosmed`}
                                  value={sosmed.platform_sosmed}
                                >
                                  <option selected>
                                    Open this select menu
                                  </option>
                                  <option value={'Instagram'}>Instagram</option>
                                  <option value={'Tiktok'}>Tiktok</option>
                                  <option value={'Shopee'}>Shopee</option>
                                  <option value={'Tokopedia'}>Tokopedia</option>
                                  <option value={'Grab'}>Grab</option>
                                  <option value={'Gojek'}>Gojek</option>
                                </Field>
                              </div>
                            </div>
                            <div className="form-body">
                              <label className="text-left font-semibold mb-2">
                                Nama Media Sosial / Toko Online
                              </label>
                              <div
                                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
                              >
                                <Field
                                  name={`sosial_media.${index}.nama_sosmed`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="Masukan Media Sosial"
                                  value={sosmed.nama_sosmed}
                                />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="form-body">
                              <label className="text-left font-semibold mb-2">
                                Link Media Sosial / Toko Online
                              </label>
                              <div
                                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
                              >
                                <Field
                                  name={`sosial_media.${index}.link_sosmed`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="Masukan Link Media Sosial"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </FieldArray>
            <div className="w-full flex justify-end">
              {param.id ? (
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-sm mt-6 text-white font-bold rounded shadow-md px-6 py-2"
                  onClick={() => editHandler(values)}
                  style={{ opacity: loading ? 0.6 : 1, width: '100px' }}
                  disabled={loading}
                >
                  {loading ? loader() : 'Simpan'}
                </button>
              ) : (
                <ActionButtons {...props} nextStep={() => validate2(values)} />
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default StepMediaSosial;
