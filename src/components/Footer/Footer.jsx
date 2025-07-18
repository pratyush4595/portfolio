import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Section Divider on Top */}
            <div className="footer-divider" aria-hidden="true" data-aos="fade-in">
                <svg viewBox="0 0 1440 50" preserveAspectRatio="none">
                    <path fill="var(--bs-tertiary-bg)" d="M0,0L1440,50L1440,0L0,0Z" />
                </svg>
            </div>

            <footer className="footer pt-5 pb-4 mt-0" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className="container">
                    <div className="row g-4 justify-content-between">

                        {/* Branding */}
                        <div className="col-lg-4">
                            <h4 className="footer-brand fw-bold">
                                <span className="brand-highlight">P</span>ratyush Swain
                            </h4>
                            <p className="small mt-2">
                                Fullstack Developer (MERN Stack) crafting modern, responsive, and secure web applications.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="col-6 col-md-4 col-lg-2">
                            <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
                            <ul className="footer-links list-unstyled">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/skills">Skills</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="col-6 col-md-4 col-lg-3">
                            <h6 className="text-uppercase fw-bold mb-3">Contact</h6>
                            <ul className="footer-contact list-unstyled small">
                                <li><i className="bi bi-envelope me-2"></i>pswain.work@gmail.com</li>
                                <li><i className="bi bi-geo-alt me-2"></i>Bengaluru, Karnataka</li>
                                <li><i className="bi bi-telephone me-2"></i>+91 XXXXXXXXXX</li>
                            </ul>
                        </div>

                        {/* Socials */}
                        <div className="col-md-12 col-lg-3">
                            <h6 className="text-uppercase text-center text-lg-start fw-bold mb-3">Follow Me</h6>
                            <div className="social-icons d-flex gap-3 justify-content-lg-start justify-content-center">
                                <a href="https://github.com/pratyush4595" target="_blank" rel="noreferrer">
                                    <i className="bi bi-github"></i>
                                </a>
                                <a href="https://linkedin.com/in/pratyushswain" target="_blank" rel="noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a href="mailto:pswain.work@gmail.com">
                                    <i className="bi bi-envelope-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <hr className="my-4" />
                    <div className="text-center small text-muted">
                        &copy; {currentYear} Pratyush Swain. All rights reserved.
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;