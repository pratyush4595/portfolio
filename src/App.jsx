import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AppRoutes from './components/Routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <AppRoutes />
      <ScrollToTop />
    </>
  );
}

export default App;