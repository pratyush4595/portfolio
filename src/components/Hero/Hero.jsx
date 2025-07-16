import React from 'react';
import './Hero.css';
import Resume from '../../assets/Resume/Pratyush_Swain_Fullstack.pdf';
import HeroIllustration from '../../assets/images/hero-illustration.svg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero d-flex align-items-center" id="home">
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Content */}
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="hero-title mb-3">Hi, I'm <span className="highlight">Pratyush Swain</span></h1>
                        <h4 className="hero-subtitle mb-3">Fullstack Developer | MERN Stack</h4>
                        <p className="hero-description">
                            Passionate about building modern fullstack web applications with beautiful UI, powerful backend,
                            and seamless user experiences.
                        </p>
                        <div className="hero-buttons mt-4">
                            <a
                                href={Resume}
                                download
                                className="btn btn-primary me-3"
                            >
                                📄 View Resume
                            </a>
                            <Link to='/contact' className="btn btn-outline-secondary">
                                📬 Contact Me
                            </Link>
                        </div>
                    </div>

                    {/* Illustration */}
                    <div className="col-lg-6 text-center illustration">
                        <img
                            src={HeroIllustration}
                            alt="Developer at work"
                            className="img-fluid hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;