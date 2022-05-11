import Forum from '../pages/Forum';
import AddDiscussion from '../pages/Forum/AddDiscussion';
import DetailForum from '../pages/Forum/DetailForum';
import Home from '../pages/Home';
import Login  from '../pages/Login';
import Pelatihan from '../pages/Pelatihan';
import DetailPelatihan from '../pages/Pelatihan/DetailPelatihan';
import Peta from '../pages/Peta';
import Produk from '../pages/Produk';
import DetailProduk from '../pages/Produk/DetailProduk';
import BuatProduk from '../pages/Profile/BuatProduk';
import BukaToko from '../pages/Profile/BukaToko';
import EditPassword from '../pages/Profile/EditPassword';
import EditProfile from '../pages/Profile/EditProfile';
import Register from '../pages/Register';
import Toko from '../pages/Toko';
import DetailToko from '../pages/Toko/DetailToko';

export const routes = [
  {
    name: 'Login',
    path: () => {
      return '/login';
    },
    exact: true,
    component: Login
  },
  {
    name: 'Register',
    path: () => {
      return '/register';
    },
    exact: true,
    component: Register
  },
  {
    name: 'Home',
    path: () => {
      return '/';
    },
    exact: true,
    component: Home
  },
  {
    name: 'Toko',
    path: () => {
      return '/toko';
    },
    exact: true,
    component: Toko
  },
  {
    name: 'Produk',
    path: () => {
      return '/produk';
    },
    exact: true,
    component: Produk
  },
  {
    name: 'Peta',
    path: () => {
      return '/peta';
    },
    exact: true,
    component: Peta
  },
  {
    name: 'DetailToko',
    path: () => {
      return '/toko/:id';
    },
    exact: true,
    component: DetailToko
  },
  {
    name: 'DetailProduk',
    path: () => {
      return '/produk/:id';
    },
    exact: true,
    component: DetailProduk
  },
  {
    name: 'Forum',
    path: () => {
      return '/diskusi';
    },
    exact: true,
    component: Forum
  },
  {
    name: 'DetailForum',
    path: () => {
      return '/diskusi/:id';
    },
    exact: true,
    component: DetailForum
  },
  {
    name: 'AddDiscussion',
    path: () => {
      return '/diskusi/tambah-diskusi';
    },
    exact: true,
    component: AddDiscussion
  },
  {
    name: 'Pelatihan',
    path: () => {
      return '/pelatihan';
    },
    exact: true,
    component: Pelatihan
  },
  {
    name: 'DetailPelatihan',
    path: () => {
      return '/pelatihan/:id';
    },
    exact: true,
    component: DetailPelatihan
  },
  {
    name: 'EditProfile',
    path: () => {
      return '/profile/edit-profile';
    },
    exact: true,
    component: EditProfile
  },
  {
    name: 'EditPassword',
    path: () => {
      return '/profile/edit-password';
    },
    exact: true,
    component: EditPassword
  },
  {
    name: 'BukaToko',
    path: () => {
      return '/profile/buka-toko';
    },
    exact: true,
    component: BukaToko
  },
  {
    name: 'BukaProduk',
    path: () => {
      return '/profile/buka-produk';
    },
    exact: true,
    component: BuatProduk
  }
];
