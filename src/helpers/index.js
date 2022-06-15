import { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import './style.scss';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const trimString = (string, length) => {
  const trimmedString =
    string.length > length ? string.substring(0, length - 3) + '...' : string;

  return trimmedString;
};

export const RequireAuth = ({ children }) => {
  const token = Cookies.get('accessToken');
  const location = useLocation();

  if (!token) {
    return <Navigate to={'/login'} state={{ path: location.pathname }} />;
  }

  return children;
};

export const loader = () => {
  return <div className="lds-dual-ring"></div>;
};

export const loaderOverlay = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)'
      }}
    >
      {' '}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%'
        }}
      >
        {loaderCard()}
      </div>
    </div>
  );
};

export const loaderCard = () => {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
