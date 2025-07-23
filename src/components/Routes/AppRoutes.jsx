import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTopOnNavigaion from '../ScrollToTopOnNavigation/ScrollToTopOnNavigation';
import MainHeader from "../MainHeader/MainHeader";
import Home from "../Home/Home";
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import ThankYou from '../../pages/ThankYou/ThankYou';
import Error from '../../pages/Error/Error';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <ScrollToTopOnNavigaion />
            <Routes>
                <Route path='/' element={<MainHeader />}>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
                <Route path='/thankyou' element={<ThankYou />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;