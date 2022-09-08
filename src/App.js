import React from 'react'
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Resume from './components/Resume'
import Projects from './components/projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
