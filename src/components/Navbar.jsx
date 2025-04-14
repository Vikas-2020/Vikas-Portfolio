import React, { useState } from "react";
import "animate.css";
import { FaBars } from "react-icons/fa";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {

  // Function to toggle the visibility of the navigation menu
  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="left animate__animated animate__rubberBand">Vikas</div>
      <div className={`right ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <FaBars className="bars" onClick={handleNav} />
    </nav>
  );
};

export default Navbar;
