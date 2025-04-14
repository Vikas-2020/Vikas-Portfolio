import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className={`about ${isMenuOpen ? "active" : ""}`} id='about'>
      <h2 data-aos="fade-right">About Me</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        I'm Vikas Kumar, a passionate frontend developer and competitive coder who enjoys crafting engaging and responsive user interfaces.
        With a strong grasp of HTML, CSS, JavaScript, and React, I strive to bring intuitive and clean designs to life.
        When I'm not building websites, you'll find me solving algorithmic challenges and sharpening my problem-solving skills.
      </p>

      <h3 data-aos="fade-right" data-aos-delay="200">Education</h3>
      <p data-aos="fade-up" data-aos-delay="300">
        I graduated in Electrical Engineering from the Indian Institute of Technology (Indian School of Mines), Dhanbad.
        My academic journey taught me the value of structured problem-solving and nurtured my technical curiosity.
      </p>

      <h3 data-aos="fade-right" data-aos-delay="400">Hobbies & Interests</h3>
      <p data-aos="fade-up" data-aos-delay="500">
        Outside of tech, I enjoy writing poetry and reading. I’m deeply interested in geopolitics and global affairs,
        often diving into articles and books that explore the world from different perspectives.
      </p>
    </main>
  );
};

export default About;
