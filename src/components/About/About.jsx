import React, { useEffect } from 'react';
import './About.css';
import pratyush_photo from '../../assets/images/pratyush-photo.png';
import Footer from '../Footer/Footer';

const About = () => {

    useEffect(() => {
        document.title = 'About Me | Pratyush Swain | MERN Fullstack Developer';
    }, [])

    return (
        <>
            <section className="about-page pt-5">
                <div className="container">
                    <h2 className="fw-bold text-center mb-5" data-aos="fade-up">About Me</h2>

                    {/* Intro */}
                    <div className="row align-items-center mb-5" data-aos="fade-up">
                        <div className="col-md-7">
                            <p className="lead">
                                I'm <strong>Pratyush Swain</strong>, a dedicated <strong>Fullstack Developer</strong> specializing in the MERN stack. With a background in web development, I love creating fast, responsive, and scalable applications that solve real-world problems.
                            </p>
                            <p>
                                I have built projects that range from CRM systems to backend APIs, combining React, Node.js, MongoDB, and Bootstrap to deliver quality results. My focus is on clean code, reusable components, and creating seamless user experiences.
                            </p>
                        </div>
                        <div className="col-md-5 text-center" data-aos="zoom-in">
                            <div className="modern-photo-frame">
                                <img
                                    loading="lazy"
                                    src={pratyush_photo}
                                    alt="Pratyush Swain"
                                    className="modern-photo-img"
                                />
                            </div>

                            {/* 👇 Caption below image */}
                            <div className="photo-caption mt-3" data-aos="fade-up" data-aos-delay="100">
                                <h5 className="fw-bold mb-1">Pratyush Swain</h5>
                                <p className="text-muted small mb-0">Fullstack Developer | MERN Stack</p>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-5" data-aos="fade-up">
                        <h4 className="fw-bold">🎓 Education</h4>
                        <div className="education-card mt-4 p-4 rounded shadow-sm">
                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start">
                                <div>
                                    <h5 className="mb-1">Master of Computer Applications (MCA)</h5>
                                    <p className="mb-1 text-muted">Manipal University Jaipur</p>
                                    <p className="mb-1"><strong>CGPA:</strong> 8.76 / 10</p>
                                </div>
                                <div className="text-md-end mt-3 mt-md-0">
                                    <span className="badge bg-primary-subtle text-primary">2023 – 2025</span>
                                </div>
                            </div>
                            <hr />
                            <ul className="mb-0 ps-3 text-secondary">
                                <li>📌 Key Subjects: DSA, DBMS, Web Technologies</li>
                                <li>🧠 Capstone: Built OmniCRM frontend (React-based CRM system)</li>
                                <li>🏆 Achievements: Top 10% in class, active in coding competitions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-5" data-aos="fade-up">
                        <h4 className="fw-bold">📜 Certifications</h4>
                        <ul className="list-unstyled mt-3">
                            <li>Frontend Developer – Relevel by Unacademy</li>
                        </ul>
                    </div>

                    {/* Skills */}
                    <div className="mb-5" data-aos="fade-up">
                        <h4 className="fw-bold">💻 Technical Skills</h4>
                        <div className="skills-list mt-3">
                            {[
                                'React', 'Node.js', 'Express', 'MongoDB',
                                'HTML5', 'CSS3', 'Bootstrap 5.3', 'Redux',
                                'Axios', 'React Router', 'JWT', 'Bcrypt',
                                'Firebase', 'Git & GitHub', 'Postman'
                            ].map((skill, idx) => (
                                <span key={idx} className="badge bg-primary-subtle text-primary me-2 mb-2">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-5" data-aos="fade-up">
                        <h4 className="fw-bold">🛠 Tools I Use</h4>
                        <div className="tools-list mt-3 d-flex flex-wrap gap-2">
                            {['VS Code', 'Git & GitHub', 'Postman', 'Firebase', 'Chrome DevTools'].map((tool, i) => (
                                <span key={i} className="tool-badge">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>


                    {/* Soft Skills */}
                    <div className="mb-5" data-aos="fade-up">
                        <h4 className="fw-bold">🧠 Soft Skills</h4>
                        <ul className="list-inline mt-3">
                            <li className="list-inline-item badge bg-secondary-subtle text-secondary mb-1">Problem Solving</li>
                            <li className="list-inline-item badge bg-secondary-subtle text-secondary mb-1">Communication</li>
                            <li className="list-inline-item badge bg-secondary-subtle text-secondary mb-1">Team Collaboration</li>
                            <li className="list-inline-item badge bg-secondary-subtle text-secondary mb-1">Adaptability</li>
                            <li className="list-inline-item badge bg-secondary-subtle text-secondary mb-1">Learning Mindset</li>
                        </ul>
                    </div>

                    {/* Personal Quote */}
                    <div className="text-center mt-5 pt-3" data-aos="fade-up">
                        <blockquote className="blockquote">
                            <p className="mb-0">"I love turning ideas into fullstack web solutions that create real impact."</p>
                            <footer className="blockquote-footer mt-2">Pratyush Swain</footer>
                        </blockquote>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About;