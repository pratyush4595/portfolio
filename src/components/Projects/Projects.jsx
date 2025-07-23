import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Projects.css';

import crm1 from '../../assets/images/omnicrm-1.png';
import crm2 from '../../assets/images/omnicrm-2.png';
import crm3 from '../../assets/images/omnicrm-3.png';
import crm4 from '../../assets/images/omnicrm-4.png';
import crm5 from '../../assets/images/omnicrm-5.png';
import crm6 from '../../assets/images/omnicrm-6.png';
import crm7 from '../../assets/images/omnicrm-7.png';
import crm8 from '../../assets/images/omnicrm-8.png';
import crm9 from '../../assets/images/omnicrm-9.png';
import crm10 from '../../assets/images/omnicrm-10.png';
import crm11 from '../../assets/images/omnicrm-11.png';
import crm12 from '../../assets/images/omnicrm-12.png';
import crm13 from '../../assets/images/omnicrm-13.png';
import crm14 from '../../assets/images/omnicrm-14.png';

import Footer from '../Footer/Footer';

const crmScreenshots = [crm1, crm2, crm3, crm4, crm5, crm6, crm7, crm8, crm9, crm10, crm11, crm12, crm13, crm14];

const Projects = () => {

    useEffect(() => {
        document.title = 'Projects | Pratyush Swain | MERN Fullstack Developer';
    }, [])

    return (
        <>
            <section className="projects-section mt-5" id="projects">
                <div className="container">
                    <h2 className="fw-bold text-center mb-5" data-aos="fade-up">Projects</h2>

                    {/* OmniCRM */}
                    <div className="project-card" data-aos="fade-up">
                        <h4 className="fw-bold">OmniCRM <span className="badge bg-primary-subtle text-primary ms-2">Frontend</span></h4>
                        <p className="tech-stack">Tech Stack: React JS, Bootstrap 5.3, React-Router, Axios</p>
                        <ul className="project-details">
                            <li>Developed a fully responsive and intuitive CRM frontend that allows users to manage customers, tickets, and users.</li>
                            <li>Designed dynamic forms and dashboards to handle add/edit/delete (CRUD operations) customer data efficiently.</li>
                            <li>Integrated REST APIs using Axios for real-time data sync and error handling.</li>
                            <li>Implemented secure session-based login with user access control.</li>
                            <li>Achieved a 25% improvement in navigation speed with React Router and optimized rendering logic.</li>
                        </ul>

                        <div className="project-links">
                            <a href="https://omnicrm.netlify.app/" target="_blank" className="btn btn-outline-primary">🔗 Live Site</a>
                            <a href="https://github.com/pratyush4595/OmniCRM" target="_blank" className="btn btn-outline-dark">💻 GitHub</a>
                            <a href="https://drive.google.com/file/d/1_Pb6u578y93tpU-3tAh-f6oGuxrT_xYF/view?usp=sharing" target="_blank" className="btn btn-outline-success">🎥 Demo Video</a>
                        </div>

                        {/* 🌀 Swiper Carousel */}
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                            }}
                            className="crm-swiper"
                        >
                            {crmScreenshots.map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img loading="lazy" src={img} alt={`CRM Screenshot ${i + 1}`} className="crm-img" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Drive App */}
                    <div className="project-card" data-aos="fade-up">
                        <h4 className="fw-bold">Drive App <span className="badge bg-primary-subtle text-primary ms-2">Backend</span></h4>
                        <p className="tech-stack">Tech Stack: Node.js, Express, MongoDB, JWT, bcrypt, Firebase</p>
                        <ul className="project-details">
                            <li>Built a robust backend server to handle secure storage and management of user data.</li>
                            <li>Performed full CRUD operations with backend validation using express-validator.</li>
                            <li>Implemented password hashing with bcrypt and JWT-based authentication for secure access.</li>
                            <li>Integrated Firebase for efficient data storage, ensuring scalability and backup support.</li>
                            <li>Improved backend efficiency and data integrity, resulting in a 30% boost in user operations.</li>
                        </ul>
                        <div className="project-links">
                            <a href="https://github.com/pratyush4595/men-drive" target="_blank" className="btn btn-outline-dark">💻 GitHub</a>
                        </div>
                    </div>

                    {/* Portfolio */}
                    <div className="project-card" data-aos="fade-up">
                        <h4 className="fw-bold">Portfolio Website <span className="badge bg-primary-subtle text-primary ms-2">Frontend</span></h4>
                        <p className="tech-stack">Tech Stack: React.js, Bootstrap 5.3, React-Router, AOS, Email JS</p>
                        <ul className="project-details">
                            <li>Designed and developed a fully responsive portfolio website with theme toggle, scroll animations, and dark/light support.</li>
                            <li>Implemented sections like Hero, About, Skills with progress bars, Projects, and Contact.</li>
                            <li>Used React Router for smooth navigation and custom ScrollToTop logic on route change.</li>
                            <li>Integrated AOS for elegant animation and optimized performance for all screen sizes.</li>
                        </ul>
                        <div className="project-links">
                            <a href="https://devpratyush.netlify.app" target="_blank" className="btn btn-outline-primary">🔗 Live Site</a>
                            <a href="https://github.com/pratyush4595/portfolio" target="_blank" className="btn btn-outline-dark">💻 GitHub</a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Projects;