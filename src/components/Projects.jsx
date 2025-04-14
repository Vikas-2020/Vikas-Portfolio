import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Projects = ({ isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation will only happen once
    });
  }, []);

  const projects = [
    {
      name: "Search Application",
      description:
        "It is a web application that integrates four APIs: Google API, Wiki API, Gemini API, and Unsplash API. This integration makes searching and discovering content easier and more efficient for users.",
      technologies: [
        "HTML",
        "Tailwind-CSS",
        "Vanilla-Css",
        "JavaScript",
        "API",
      ],
      link: "https://search-application-vikas-kumars-projects-a25b81d4.vercel.app/",
    },
    {
      name: "Airbnb Clone",
      description:
        "This is a clone of the Airbnb website created using HTML and CSS. The project replicates the core structure and design elements of the original site, providing a simple, responsive layout that mimics the Airbnb user experience.",
      technologies: ["HTML", "Vanilla-Css"],
      link: "https://airbnb-clone-rho-three.vercel.app/",
    },
    {
      name: "Pokemon App",
      description:
        "This app utilizes the Pokemon API to fetch and display Pokemon data. It features a search functionality to find Pokemon by name and a filter option to sort them by type, providing an interactive and user-friendly experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Pokemon-API"],
      link: "https://pokemon-roan-three.vercel.app/",
    },
  ];

  return (
    <section className={`projects ${isMenuOpen ? "active" : ""}`} id="projects">
      <h2 data-aos="fade-up">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-project-button">View Project</button>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
