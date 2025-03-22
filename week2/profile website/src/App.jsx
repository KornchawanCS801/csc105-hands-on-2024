import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/About";
import Gallery from "./pages/Gallery";
import "./App.css"; 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Gallery />
    </div>
  );
}

export default App;
