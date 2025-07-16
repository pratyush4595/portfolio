import { useEffect } from 'react';
import './Navbar.css'; // Optional for custom styling

const Navbar = () => {

  // Define Navlink classes
  const activeNavlink = 'nav-link active';
  const inactiveNavlink = 'nav-link';
  
  // Set default theme to dark on initial load
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }, []);

  // Theme toggler
  const handleThemeToggle = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    html.setAttribute('data-bs-theme', currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm sticky-top">
      <div className="container">
        {/* Text Brand */}
        <a className="navbar-brand fw-bold fs-4 text-uppercase" href="#">
          <span className="brand-highlight">P</span>ratyush
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={handleThemeToggle}
            className="btn btn-outline-secondary ms-3"
            title="Toggle theme"
          >
            <i className="bi bi-circle-half"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;