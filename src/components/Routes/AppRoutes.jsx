import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainHeader from "../MainHeader/MainHeader";
import Home from "../Home/Home";

const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <MainHeader /> }>
                    <Route index element={ <Home /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;