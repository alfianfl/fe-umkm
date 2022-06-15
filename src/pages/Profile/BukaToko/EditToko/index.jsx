import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import StepAlamat from '../../../../components/BuatToko/StepAlamat';
import StepVoucher from '../../../../components/BuatToko/StepVoucher';
import StepMediaSosial from '../../../../components/BuatToko/StepMediaSosial';
import StepProfile from '../../../../components/BuatToko/StepProfile';
import StepAdministrasi from '../../../../components/BuatToko/StepAdministrasi';
import StepLegalitas from '../../../../components/BuatToko/StepLegalitas';
import './style.scss';
import back from '../../../../assets/img/back.png';
import { NavLink } from 'react-router-dom';

const EditToko = () => {
  return (
    <Tabs>
      <div className="edit-toko">
        <h1 className="flex">
          {' '}
          <NavLink to="/profile/buka-toko">
            <img src={back} alt="back" />
          </NavLink>
          <span>Edit Toko UMKM</span>{' '}
        </h1>
      </div>
      <div className="mb-6">
        <TabList>
          <Tab>Profile Toko</Tab>
          <Tab>Media Sosial</Tab>
          <Tab>Alamat Toko</Tab>
          <Tab>Voucher Toko</Tab>
          <Tab>Administrasi Toko</Tab>
          <Tab>Legalitas Toko</Tab>
        </TabList>
      </div>

      <TabPanel>
        <StepProfile />
      </TabPanel>
      <TabPanel>
        <StepMediaSosial />
      </TabPanel>
      <TabPanel>
        <StepAlamat />
      </TabPanel>
      <TabPanel>
        <StepVoucher />
      </TabPanel>
      <TabPanel>
        <StepAdministrasi />
      </TabPanel>
      <TabPanel>
        <StepLegalitas />
      </TabPanel>
    </Tabs>
  );
};

export default EditToko;
