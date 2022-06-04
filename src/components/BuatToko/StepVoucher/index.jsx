import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import './style.scss';
import plus from '../../../assets/img/plus.svg';

const initialValues = {
  friends: [
    {
      platform: '',
      nama: '',
      link: '',
      date: ''
    }
  ]
};

const StepVoucher = (props) => {
  const validate2 = (val) => {
    props.nextStep();
    console.log(val);
  };
  return (
    // onSubmit={async (values) => {
    //   await new Promise((r) => setTimeout(r, 500));
    //   alert(JSON.stringify(values, null, 2));
    // }}
    <div className="site-media-sosial">
      <div className="title">
        <h1>Voucher Toko</h1>
      </div>
      <Formik initialValues={initialValues}>
        {({ values }) => (
          <Form>
            <FieldArray name="friends">
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
                  {values.friends.length > 0 &&
                    values.friends.map((friend, index) => (
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
                                  name={`friends.${index}.nama`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="ex: Diskon 10% Semua Menu"
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
                                  name={`friends.${index}.platform`}
                                >
                                  <option selected>
                                    Open this select menu
                                  </option>
                                  <option value={1}>One</option>
                                  <option value={2}>Two</option>
                                  <option value={3}>Three</option>
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
                                  name={`friends.${index}.link`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="Masukan Link Media Sosial"
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
                                  name={`friends.${index}.date`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="Masukan Tanggal"
                                  type="date"
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
              <button className="bg-orange-500 hover:bg-orange-600 text-sm text-white font-bold rounded shadow-md px-6 py-2 mt-4">
                Simpan Perubahan
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default StepVoucher;
