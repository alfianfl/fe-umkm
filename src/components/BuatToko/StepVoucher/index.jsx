import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import './style.scss';
import plus from '../../../assets/img/plus.svg';
import { getTokoByIdAPI, editPromoAPI } from '../../../models/TokoAPI';
import { useParams } from 'react-router';
import { loader } from '../../../helpers';
import swal from 'sweetalert';



const StepVoucher = (props) => {
  const [loading, setLoading] = useState(false);
  const param = useParams();
  const [initialValues, setInitialValues] = useState({
    promos: [
      {
        platform: '',
        nama_promo: '',
        link: '',
        masa_berlaku: ''
      }
    ]
  })
  useEffect(() => {
    if (param.id) {
      getTokoByIdAPI(param.id)
        .then((res) => {
     
          setInitialValues({
            ...initialValues,
            promos: res.data.data.promos
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [param.id]);

  const addPromo = (val) =>{
    editPromoAPI(val, param.id).then((res) => {
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
  

  return (
    // onSubmit={async (values) => {
    //   await new Promise((r) => setTimeout(r, 500));
    //   alert(JSON.stringify(values, null, 2));
    // }}
    <div className="site-media-sosial">
      <div className="title">
        <h1>Voucher Toko</h1>
      </div>
      <Formik  enableReinitialize={true} initialValues={initialValues}>
        {({ values }) => (
          <Form>
            <FieldArray name="promos">
              {({ insert, remove, push }) => (
                <div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-blue-800 flex items-center hover:bg-blue-700 font-bold text-white rounded text-sm shadow-md px-6 py-2"
                      onClick={() => push({ platform: '', nama: '', link: '' })}
                    >
                      <img src={plus} className="mr-1" alt="" /> Tambah Voucher
                    </button>
                  </div>
                  {values.promos.length > 0 &&
                    values.promos.map((friend, index) => (
                      <div className="thumb-media-sosial p-4 mt-4" key={index}>
                        <div className="flex justify-end">
                          <button
                            type="button"
                            className="bg-red-500 hover:bg-red-600 font-bold text-white rounded shadow-md px-6 text-sm py-2"
                            onClick={() => remove(index)}
                          >
                            Hapus
                          </button>
                        </div>
                        <div className="form-content">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="form-body">
                              <label className="text-left font-semibold mb-2">
                                Nama Voucher Toko / Promosi Toko
                              </label>
                              <div
                                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
                              >
                                <Field
                                  name={`promos.${index}.nama_promo`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="ex: Diskon 10% Semua Menu"
                                  value={friend.nama_promo}
                                />
                              </div>
                            </div>
                            <div className="form-body">
                              <label className="text-left font-semibold">
                                Platform Media Sosial Vocuher
                              </label>
                              <div className="mb-3 w-full">
                                <Field
                                  className="form-input h-12 focus:outline-none pl-2 mt-2 w-full"
                                  aria-label="Default select example"
                                  as="select"
                                  name={`promos.${index}.platform`}
                                  value={friend.platform}
                                >
                                  <option value={''} selected>
                                    Open this select menu
                                  </option>
                                  <option value={'Tokopedia'}>Tokopedia</option>
                                  <option value={'Shopee'}>Shopee</option>
                                  <option value={'Gojek'}>Gojek</option>
                                  <option value={'Grab'}>Grab</option>
                                </Field>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="form-body">
                              <label className="text-left font-semibold mb-2">
                                Link Platform Voucher
                              </label>
                              <div
                                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
                              >
                                <Field
                                  name={`promos.${index}.link`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="Masukan Link Media Sosial"
                                  value={friend.link}
                                />
                              </div>
                            </div>
                            <div className="form-body">
                              <label className="text-left font-semibold mb-2">
                                Tanggal Berlaku
                              </label>
                              <div
                                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
                              >
                                <Field
                                  name={`promos.${index}.masa_berlaku`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="Masukan Tanggal"
                                  type="date"
                                  value={friend.masa_berlaku}
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
              {
                <button
                  className="bg-orange-500 hover:bg-orange-600 text-sm mt-6 text-white font-bold rounded shadow-md px-6 py-2"
                  onClick={() => addPromo(values)}
                  style={{ opacity: loading ? 0.6 : 1, width: '100px' }}
                  disabled={loading}
                >
                  {loading ? loader() : 'Simpan'}
                </button>
              }
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default StepVoucher;
