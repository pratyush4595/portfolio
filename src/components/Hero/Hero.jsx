import React, { useState } from 'react';
import './Hero.css';
import Resume from '../../assets/Resume/Pratyush_Swain_Fullstack.pdf';
import { Link } from 'react-router-dom';
import devIcons from './devIcons';
import HireModal from './HireModal';

const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="hero d-flex align-items-center pt-5" id="home">
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Content */}
                    <div className="col-lg-6 text-center text-lg-start mb-3">
                        <h1 className="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
                            Hi, I'm <span className="highlight">Pratyush Swain</span>
                        </h1>
                        <h4 className="hero-subtitle mb-3" data-aos="fade-up" data-aos-delay="200">
                            Fullstack Developer | MERN Stack
                        </h4>
                        <p className="hero-description" data-aos="fade-up" data-aos-delay="300">
                            Passionate about building modern fullstack web applications with beautiful UI, powerful backend,
                            and seamless user experiences.
                        </p>
                        <div className="d-flex flex-column flex-lg-row mt-2 mb-3" data-aos="fade-up" data-aos-delay="400">
                            <a
                                href={Resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary mt-2 me-2"
                            >
                                📄 View Resume
                            </a>
                            <Link to="/contact" className="btn btn-outline-secondary mt-2 me-2">
                                📬 Contact Me
                            </Link>
                            <button className="btn btn-outline-success mt-2 me-2" onClick={() => setShowModal(true)}>
                                💼 Hire Me
                            </button>
                        </div>
                    </div>

                    {/* Tech Icons Grid */}
                    <div className="col-lg-6 d-flex justify-content-center align-items-center" data-aos="zoom-in">
                        <div className="hero-icons-container">
                            {devIcons.map((icon, idx) => (
                                <i
                                    key={idx}
                                    className={`devicon-icon ${icon.class}`}
                                    style={{ top: icon.top, left: icon.left }}
                                    title={icon.name}
                                ></i>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <HireModal show={showModal} onClose={() => setShowModal(false)} />
        </section>
    );
};

export default Hero;
