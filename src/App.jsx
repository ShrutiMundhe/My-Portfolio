import React from 'react';
import './App.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';

function App() {
  const projects = [
    {
      id: 1,
      title: "Legal-Reach",
      category: "Platform Architecture",
      year: "2026",
      description: "A digital bridge between legal professionals and clients. I engineered the frontend to be accessible and highly responsive.",
      stack: ["React", "Node.js", "CSS Modules"],
      link: "https://github.com/ShrutiMundhe/legal-reach"
    },
    {
      id: 2,
      title: "Tomato Delivery",
      category: "Consumer Tech",
      year: "2025",
      description: "A high-performance food delivery interface featuring real-time cart management and dynamic restaurant filtering.",
      stack: ["React", "Context API", "JavaScript"],
      link: "https://github.com/ShrutiMundhe/Tomato--Food-Delivery-app"
    },
    {
      id: 3,
      title: "Sustainable Resource Distribution Platform",
      category: "Social Impact",
      year: "2025",
      description: "Optimizing resource distribution through a MERN stack solution. Focused on backend efficiency and database schema.",
      stack: ["MongoDB", "Express", "Node.js"],
      link: "#"
    }
  ];

  const skills = [
    "React.js & Vite", "Node.js Architecture", "MongoDB Aggregations", 
    "Java (DSA)", "RESTful APIs", "UI/UX Principles"
  ];

  return (
    <div className="main-wrapper">
      
      {/* LEFT SIDE - FIXED IDENTITY */}
      <aside className="sidebar">
        <div className="identity">
          <h1>Shruti<br />Mundhe</h1>
          <p className="role">Full Stack Developer (MERN)</p>
          
          {/* Detailed Intro Section */}
          <div className="tagline">
             <p>
              I am a final-year <b>IT Engineering student</b> (Class of 2026) passionate about building scalable, full-stack web applications. 
            </p>
            <br />
            <p>
              Specializing in the <b>MERN Stack</b>, I focus on creating clean, accessible frontends backed by efficient RESTful APIs.
            </p>
            <br />
            <p>
              Currently, I am developing <b>"Legal-Reach,"</b> a platform bridging the gap between legal professionals and clients, while sharpening my skills in <b>Data Structures & Algorithms (Java)</b>.
            </p>
          </div>
          
          <div className="status-badge">
            <span className="dot"></span> Available for 2026 Placement
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="social-links">
            <a href="https://github.com/ShrutiMundhe" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/shruti-mundhe-95101934b" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="mailto:shrutimundhe22@gmail.com"><FaEnvelope /></a>
          </div>
          <p className="copyright">© 2026 Edition</p>
        </div>
      </aside>

      {/* RIGHT SIDE - SCROLLABLE CONTENT */}
      <main className="content">
        
        {/* SKILLS TICKER */}
        <section className="skills-section">
          <h2 className="section-label">Core Stack</h2>
          <div className="skills-wrap">
            {skills.map((skill, index) => (
              <span key={index} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>

        {/* PROJECTS FEED */}
        <section className="projects-section">
          <h2 className="section-label">Projects</h2>
          
          <div className="project-list">
            {projects.map((project) => (
              <a href={project.link} target="_blank" rel="noreferrer" key={project.id} className="project-item">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="year">{project.year}</span>
                </div>
                <div className="project-meta">
                  <span>{project.category}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.stack.map((t, i) => <span key={i}>{t}</span>)}
                </div>
                <div className="hover-indicator">
                  View Code <FaArrowRight />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* COMPACT FORM */}
        <section className="contact-mini">
          <h2 className="section-label">Initiate Contact</h2>
          {/* IMPORTANT: Paste your Formspree link below where it says https://formspree.io/f/... */}
          <form action="https://formspree.io/f/xgoynnjd" method="POST">
            <input type="email" name="email" placeholder="Enter your email address..." required />
            <button type="submit"><FaArrowRight /></button>
          </form>
          {/* NEW: Direct Email Section */}
          <div className="direct-email">
            <p>Or you can contact me directly on email:</p>
            <a href="mailto:shrutimundhe22@gmail.com" className="email-link">
              shrutimundhe22@gmail.com
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;