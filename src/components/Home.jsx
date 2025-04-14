import "animate.css";
import vikas from "../assets/vikas.jpg";
import resume from "../assets/resume.pdf";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin, IoMail } from "react-icons/io5";

const Home = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <main className={`home ${isMenuOpen ? "active" : ""}`} id="home">
      <p className="animate__animated animate__backInDown">
        Hello, my name is{" "}
      </p>
      <h1>Vikas Kumar</h1>
      <span className="animate__animated animate__flipInX">
        <img src={vikas} alt={"vikas img"} />
      </span>
      <h2 className="animate__animated animate__slideInLeft">
        Passionate Frontend Developer and Competitive Coder
      </h2>
      <p className="animate__animated animate__slideInRight">
        Building UIs by day, solving algorithms by night
      </p>
      <div className="social animate__animated animate__slideInUp">
        <a href={"https://github.com/Vikas-2020"}>
          <IoLogoGithub />
        </a>
        <a href={"https://www.linkedin.com/in/vikaskr01/"}>
          <IoLogoLinkedin />
        </a>
        <a href={"mailto:vikaskr.shiv@gmail.com"}>
          <IoMail />
        </a>
      </div>
      <a
        className="animate__animated animate__fadeIn"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>View Resume</button>
      </a>
    </main>
  );
};

export default Home;
