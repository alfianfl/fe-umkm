import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import StepWizard from 'react-step-wizard';
import StepAlamat from '../../../../components/BuatToko/StepAlamat';
import StepMediaSosial from '../../../../components/BuatToko/StepMediaSosial';
import StepProfile from '../../../../components/BuatToko/StepProfile';
import { createTokoAPI } from '../../../../models/TokoAPI';
import {  useNavigate } from "react-router-dom";
import './style.scss';
import swal from 'sweetalert';
<>
  <StepProfile />

  <StepMediaSosial />

  <StepAlamat />
</>;

const TambahToko = () => {
  const [stepWizard, setStepWizard] = useState(null);
  const [data, setData] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  let history =  useNavigate();

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignData = (val) => {
    setData((data) => ({
      ...data,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log('step change');
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = (payloadLastStep) => {
    const newData = new FormData();
    newData.append("nama_toko", data.nama_toko);
    newData.append("sektor_usaha", data.sektor_usaha);
    newData.append("telp_toko", data.telp_toko);
    newData.append("email_toko", data.email_toko);
    newData.append("deskripsi_toko", data.deskripsi_toko);
    newData.append("logo",data.logo);
    for (const key of Object.keys(data.sosial_media)) {
      newData.append("sosial_media", JSON.stringify(data.sosial_media[key]));
    }
    for (const key of Object.keys( data.gallery)) {
      newData.append('gallery', data.gallery[key])
    }
    newData.append("alamat",payloadLastStep.alamat);
    newData.append("kode_pos",payloadLastStep.kode_pos);
    newData.append("longitude",payloadLastStep.lokasi[0]);
    newData.append("latitude",payloadLastStep.lokasi[1]);
    newData.append("kecamatan",payloadLastStep.kecamatan);

    setLoading(true)
    createTokoAPI(newData)
      .then((res) => {
        if (res.data.status === 'error') {
          swal('Server Error')
        } else {
          history("/profile/buka-toko");
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
   
  };

  

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step label="Profile Toko" />
        <Step label="Media Sosial / Toko Online" />
        <Step label="Alamat" />
      </Stepper>
      {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <StepProfile dataCallback={assignData} />
        <StepMediaSosial dataCallback={assignData} />
        <StepAlamat loading={loading} completeCallback={handleComplete}   />
      </StepWizard>

    </div>
  );
};

export default TambahToko;
