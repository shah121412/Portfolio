import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Frameworks from "./Component/Frameworks";
import { Projects } from "./Component/Projects";
function App() {
  return (
    <>
      {/* <Navbar/> */}
      <About />
      <Frameworks />
      <Projects />
    </>
  );
}

export default App;
