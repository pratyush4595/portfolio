import { Outlet } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

const MainHeader = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default MainHeader;