import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHeader from "../MainHeader/MainHeader";
import Home from "../Home/Home";
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Error from '../Error/Error';

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <MainHeader /> }>
                    <Route index element={ <Home /> } />
                    <Route path='/about' element={ <About /> } />
                    <Route path='/skills' element={ <Skills /> } />
                    <Route path='/projects' element={ <Projects /> } />
                    <Route path='/contact' element={ <Contact /> } />
                </Route>
                <Route path='*' element={ <Error /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;