import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
