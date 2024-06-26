import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Skills from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import AboutExperience from "./components/AboutExperience"; // Asegúrate de importar por defecto
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills /> {}
      <Projects />
      <AboutExperience /> {}
      <Footer />
    </div>
  );
}

export default App;
