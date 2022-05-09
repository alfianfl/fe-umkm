import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
