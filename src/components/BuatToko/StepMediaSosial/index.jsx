import ActionButtons from '../ActionButtons';
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
      date:''
    }
  ]
};

const StepMediaSosial = (props) => {
  const validate2 = (val) => {
    props.nextStep();
    console.log(val)
  };
  return (
    // onSubmit={async (values) => {
    //   await new Promise((r) => setTimeout(r, 500));
    //   alert(JSON.stringify(values, null, 2));
    // }}
    <div className="site-media-sosial">
      <div className="title">
        <h1>Media Sosial / Toko Online</h1>
        <p>
          Anda dapat melewati tahap ini apabila belum mempunyai media sosial
          atau toko online.
        </p>
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
                      className="bg-orange-500 flex items-center hover:bg-orange-600 font-bold text-white rounded text-sm shadow-md px-6 py-2"
                      onClick={() => push({ platform: '', nama: '', link: '' })}
                    >
                      <img src={plus} className="mr-1" alt="" /> Tambah Media
                      Sosial
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
                              <label className="text-left font-semibold">
                                Platform Media Sosial / Toko Online
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
                            <div className="form-body">
                              <label className="text-left font-semibold mb-2">
                                Nama Media Sosial / Toko Online
                              </label>
                              <div
                                className={`form-input pr-4 flex items-center bg-white rounded mb-4`}
                              >
                                <Field
                                  name={`friends.${index}.nama`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="Masukan Media Sosial"
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
                                  name={`friends.${index}.link`}
                                  className="w-full h-12 focus:outline-none pl-2"
                                  placeholder="Masukan Link Media Sosial"
                                />
                              </div>
                            </div>
                            {/* <div className="form-body">
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
                            </div> */}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </FieldArray>
            <ActionButtons {...props} nextStep={() => validate2(values)} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default StepMediaSosial;
