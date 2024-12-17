import React, { useEffect, useState } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from "../assets/logo.jpeg"; 
import "./styles.css";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-theme');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle('dark-theme', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  const toggleButton = (e) => {
    e.currentTarget.classList.toggle('on');
    e.currentTarget.classList.toggle('off');
    toggleTheme(); 
  };

  return (
    <nav className={`nav ${darkMode ? 'dark-theme' : ''}`}>
      <Link to="/" className="site-title">
        <img src={logo} alt="Logo" className="logo" /> 
        Neural Shifter
      </Link>
      <Link to="/immo">👨Be Immortal 🤖</Link>

      <ul>
        <CustomLink to="/contactus">Contact Us📲</CustomLink>
        <CustomLink to="/about">About📖</CustomLink>
        <li className={`toggle-button ${darkMode ? 'on' : 'off'}`} onClick={toggleButton}></li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
