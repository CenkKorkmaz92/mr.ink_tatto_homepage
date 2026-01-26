import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Utility component to scroll to top on route change
 * Improves UX by ensuring new pages start at the top
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
