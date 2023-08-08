import React from "react";
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Service from "./routes/Service";

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Service" element={<Service/>}/>
      </Routes>
        <Navbar/>
    </div>
  );
}
