import React from 'react';
import './AboutPreview.css';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
    return (
        <section className="about-preview py-5">
            <div className="container">
                <div className="card shadow-lg border-0 rounded-4 p-4 bg-body-tertiary" data-aos="fade-up">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <h2 className="mb-3 fw-bold">About Me</h2>
                            <p className="lead mb-0">
                                I'm a passionate <strong>Fullstack Developer</strong> (MERN Stack) who loves building powerful web
                                applications with clean code and rich user experiences. I enjoy solving real-world problems through modern technologies.
                            </p>
                        </div>
                        <div className="col-lg-3 text-lg-end mt-4 mt-lg-0">
                            <Link to="/about" className="btn btn-outline-primary btn-lg">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;