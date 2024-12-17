import React from 'react';
import Navbar from "./pages/NavBar.jsx";
import ContactUs from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx"; // Ensure Home.jsx exists in the correct path
import About from "./pages/About.jsx";
import Immo from "./pages/Immo.jsx";
import Clock from "./components/Clock.jsx"; 
import { Route, Routes } from "react-router-dom";
import './App.css';
import ChatBox from './components/ChatBox.jsx';


function App() {
  return (
    <>
      <Navbar />
      <Clock />
      <ChatBox />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/immo/*" element={<Immo />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
