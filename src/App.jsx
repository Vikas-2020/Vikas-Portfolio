import { useState } from 'react'
import './App.css'

import './css/navbar.css';
import Navbar from './components/Navbar';

import './css/home.css';
import Home from './components/Home';

import './css/about.css'
import About from './components/About';

import './css/skills.css'
import Skills from './components/Skills';

import './css/projects.css'
import Projects from './components/Projects';

import './css/contact.css'
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Home  isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <About isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Skills isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Projects isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <Contact isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
    </>
  )
}

export default App
