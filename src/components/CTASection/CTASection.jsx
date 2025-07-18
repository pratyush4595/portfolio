import React from 'react';
import './CTASection.css';
import { Link } from 'react-router-dom';
import Resume from '../../assets/Resume/Pratyush_Swain_Fullstack.pdf';

const CTASection = () => {
    return (
        <section className="py-5 text-center">
            <div className="container">
                <h2 className="fw-bold mb-3" data-aos="fade-up">Let’s build something awesome together!</h2>
                <p className="lead mb-4" data-aos="fade-up" data-aos-delay="100">
                    I’m open to collaborations, freelance opportunities, or full-time roles. Let’s connect!
                </p>
                <div className="cta-buttons d-flex flex-column flex-md-row justify-content-center gap-3" data-aos="fade-up" data-aos-delay="200">
                    <Link to="/contact" className="btn btn-primary btn-lg">
                        📬 Contact Me
                    </Link>
                    <a
                        href={Resume}
                        download
                        className="btn btn-outline-secondary btn-lg"
                    >
                        📄 Download Resume
                    </a>
                    <Link to="/projects" className="btn btn-outline-primary btn-lg">
                        🧩 View Projects
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;