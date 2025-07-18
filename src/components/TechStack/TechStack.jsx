import React from 'react';
import './TechStack.css';

const techs = [
    { name: 'React', icon: 'devicon-react-original' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain' },
    { name: 'Express', icon: 'devicon-express-original' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain' },
    { name: 'HTML5', icon: 'devicon-html5-plain' },
    { name: 'CSS3', icon: 'devicon-css3-plain' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Firebase', icon: 'devicon-firebase-plain' },
    { name: 'Postman', icon: 'devicon-postman-plain' },
];

const TechStack = () => {
    return (
        <section className="techstack py-5" id="skills">
            <div className="container">
                <h2 className="text-center fw-bold mb-4">Tech Stack</h2>
                <div className="row justify-content-center g-4">
                    {techs.map((tech, index) => (
                        <div className="col-4 col-md-3 col-lg-2" key={index} data-aos="fade-up" data-aos-delay={`${index * 80}`}>
                            <div className="tech-card text-center bg-body-tertiary p-3 rounded-4 shadow-sm">
                                <i className={`${tech.icon} colored fs-1`}></i>
                                <p className="mt-2 mb-0 small">{tech.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;