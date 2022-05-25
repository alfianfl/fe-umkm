import React, { useState } from 'react';
import { Stepper, Step } from 'react-form-stepper';
import StepWizard from 'react-step-wizard';
import StepAlamat from '../../../../components/BuatToko/StepAlamat';
import StepMediaSosial from '../../../../components/BuatToko/StepMediaSosial';
import StepProfile from '../../../../components/BuatToko/StepProfile';
import './style.scss';
<>
  <StepProfile />

  <StepMediaSosial />

  <StepAlamat />
</>;

const TambahToko = () => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log('parent receive user callback');
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val
    }));
  };

  const handleStepChange = (e) => {
    console.log('step change');
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert('You r done. TQ');
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
        <StepProfile userCallback={assignUser} />
        <StepMediaSosial user={user} userCallback={assignUser} />
        <StepAlamat user={user} completeCallback={handleComplete} />
      </StepWizard>
    </div>
  );
};

export default TambahToko;
