import React, { useEffect } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaDatabase, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiMongodb, SiExpress, SiPostman, SiFirebase, SiNetlify, SiVite, SiJsonwebtokens } from 'react-icons/si';
import './Skills.css';
import Footer from '../Footer/Footer';

const skillGroups = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, level: 90 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 80 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
      { name: 'React.js', icon: <FaReact />, level: 90 },
      { name: 'Redux', icon: <SiRedux />, level: 80 },
      { name: 'Bootstrap 5.3', icon: <FaBootstrap />, level: 80 },
      { name: 'React Router', icon: <FaReact />, level: 90 },
      { name: 'Axios', icon: <SiJavascript />, level: 85 },
      { name: 'Vite', icon: <SiVite />, level: 80 }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs />, level: 90 },
      { name: 'Express.js', icon: <SiExpress />, level: 85 },
      { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
      { name: 'Mongoose', icon: <SiMongodb />, level: 80 }
    ]
  },
  {
    title: 'Authentication & Security',
    skills: [
      { name: 'JWT', icon: <SiJsonwebtokens />, level: 85 },
      { name: 'Bcrypt', icon: <SiJavascript />, level: 80 },
      { name: 'Firebase', icon: <SiFirebase />, level: 70 }
    ]
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, level: 88 },
      { name: 'GitHub', icon: <FaGithub />, level: 90 },
      { name: 'Postman', icon: <SiPostman />, level: 85 },
      { name: 'Netlify', icon: <SiNetlify />, level: 85 }
    ]
  },
  {
    title: 'Core Concepts',
    skills: [
      { name: 'OOPs', icon: <FaDatabase />, level: 80 },
      { name: 'Responsive Web Design', level: 90 },
      { name: 'Debugging & Testing', level: 80 },
      { name: 'Single Page Applications (SPA)', level: 85 }
    ]
  }
];

const Skills = () => {

  useEffect(() => {
    document.title = 'Skills | Pratyush Swain | MERN Fullstack Developer';
  }, [])

  return (
    <>
      <section className="skills-section pt-5" id="skills">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" data-aos="fade-up">💡 My Skills</h2>

          {skillGroups.map((group, idx) => (
            <div className="mb-5" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <h4 className="fw-semibold mb-4">{group.title}</h4>
              <div className="row">
                {group.skills.map((skill, index) => (
                  <div className="col-md-6 col-lg-4 mb-4" key={index}>
                    <div className={`skill-card ${skill.level >= 90 ? 'glow' : ''}`}>
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="progress-container">
                        <div
                          className="progress-bar-custom"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Skills;
