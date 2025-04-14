import {
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaReact,
  FaJsSquare,
  FaCuttlefish,
  FaCode,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si"; // Tailwind isn't in Fa, keeping this

const Skills = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <main className={`skills ${isMenuOpen ? "active" : ""}`} id="skills">
      <h2 data-aos="fade-up">My Skills</h2>
      <div className="skills-grid">
        <div className="skill-card" data-aos="zoom-in">
          <FaJava color="#f89820" size="3rem" />
          <p>Java</p>
        </div>
        <div className="skill-card" data-aos="zoom-in">
          <FaCode color="#004482" size="3rem" />
          <p>C++</p>
        </div>
        <div className="skill-card" data-aos="zoom-in">
          <FaCuttlefish color="#00599c" size="3rem" />
          <p>C</p>
        </div>
        <div className="skill-card" data-aos="zoom-in">
          <FaHtml5 color="#e44d26" size="3rem" />
          <p>HTML</p>
        </div>
        <div className="skill-card" data-aos="zoom-in">
          <FaCss3Alt color="#264de4" size="3rem" />
          <p>CSS</p>
        </div>
        <div className="skill-card" data-aos="zoom-in">
          <SiTailwindcss color="#38bdf8" size="3rem" />
          <p>Tailwind</p>
        </div>
        <div className="skill-card" data-aos="zoom-in">
          <FaJsSquare color="#f0db4f" size="3rem" />
          <p>JavaScript</p>
        </div>
        <div className="skill-card" data-aos="zoom-in">
          <FaReact color="#61dbfb" size="3rem" />
          <p>React</p>
        </div>
        <div className="skill-card" data-aos="zoom-in">
          <FaGithub color="#ffffff" size="3rem" />
          <p>GitHub</p>
        </div>
      </div>
    </main>
  );
};

export default Skills;
