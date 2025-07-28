import { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Define Navlink classes
  const activeNavlink = 'nav-link active';
  const inactiveNavlink = 'nav-link';

  // Set default theme to dark on initial load
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  }, [theme]);

  // Theme toggler
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Mobile button toggler
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close mobile menu on navitem click
  const handleNavItemClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm sticky-top">
      <div className="container">
        {/* Text Brand */}
        <Link to='/' className="navbar-brand fw-bold fs-4 text-uppercase">
          <span className="brand-highlight">P</span>ratyush
        </Link>

        {/* Mobile Custom Theme Switcher */}
        <div className="d-lg-none ms-auto me-4 theme-toggle ms-4" onClick={toggleTheme} title="Toggle Theme">
          <div className={`switch ${theme === 'light' ? 'active' : ''}`}>
            <div className="thumb">
              <i className={`bi ${theme === 'light' ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
            </div>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`navbar-toggler custom-toggler ${isMenuOpen ? 'open' : ''}`}
          type="button"
          onClick={toggleMenu}
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <i className={`bi ${isMenuOpen ? 'bi-x-lg' : 'bi-list'}`}></i>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="mainNavbar">
          <ul className="navbar-nav nav-tabs mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to='/' className={({ isActive }) => isActive ? activeNavlink : inactiveNavlink} onClick={handleNavItemClick}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/about' className={({ isActive }) => isActive ? activeNavlink : inactiveNavlink} onClick={handleNavItemClick}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/skills' className={({ isActive }) => isActive ? activeNavlink : inactiveNavlink} onClick={handleNavItemClick}>Skills</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/projects' className={({ isActive }) => isActive ? activeNavlink : inactiveNavlink} onClick={handleNavItemClick}>Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' className={({ isActive }) => isActive ? activeNavlink : inactiveNavlink} onClick={handleNavItemClick}>Contact</NavLink>
            </li>
          </ul>

          {/* Custom Theme Switcher */}
          <div className="d-none d-lg-block theme-toggle ms-4" onClick={toggleTheme} title="Toggle Theme">
            <div className={`switch ${theme === 'light' ? 'active' : ''}`}>
              <div className="thumb">
                <i className={`bi ${theme === 'light' ? 'bi-sun-fill' : 'bi-moon-stars-fill'}`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;