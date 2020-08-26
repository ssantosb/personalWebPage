import React from "react";
import "./App.css";

import Navigation from "./components/navigation";
import AboutMe from "./components/aboutMe";
import Profile from "./components/profile";
import Academic from "./components/academic";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Hobbies from "./components/hobbies";
import Contact from "./components/contact";

function App() {
  return (
    <div className="contaier">
      <Navigation />
      <header className="header text-center">
        <h1>Miguel Hoyos Ruge</h1>
      </header>

      <div className="container-lg">
        <AboutMe />

        <Profile />

        <Academic />

        <Skills />

        <Projects />

        <Hobbies />
      </div>
      <Contact />
    </div>
  );
}

export default App;
