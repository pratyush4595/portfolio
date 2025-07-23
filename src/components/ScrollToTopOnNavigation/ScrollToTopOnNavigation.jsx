import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigation = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Instantly scroll to top when route changes
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default ScrollToTopOnNavigation;