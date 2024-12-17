import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import logo from "../assets/logo.jpeg"; 
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import './styles.css';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [hasSubmitted, setHasSubmitted] = useState(!!name);
  const [greeting, setGreeting] = useState('');

  const [text] = useTypewriter({
    words: ['Change your Carbon consciousness🧬 to Silicon consciousness🦿'],
    loop: 3,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  });

  useEffect(() => {
    setIsActive(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting('Good morning');
      } else if (hour < 18) {
        setGreeting('Good afternoon');
      } else {
        setGreeting('Good evening');
      }
    };

    updateGreeting();
    const intervalId = setInterval(updateGreeting, 60000); // Update greeting every minute

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameSubmit = () => {
    setHasSubmitted(true);
  };

  return (
    <div className={`hero-section fade-in ${isActive ? 'active' : ''}`}>
      {!hasSubmitted ? (
        <div className="name-input">
          <Typography variant="h4">Enter your name:</Typography>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Your Name"
          />
          <Button variant="contained" color="primary" onClick={handleNameSubmit}>
            Submit
          </Button>
        </div>
      ) : (
        
        <div className="hero-content">
            <Typography variant="h4" style={{ fontStyle: 'italic' }}>
              Death as Utopia 💀 <br/> Redefining Transcendence in a Technological Age 🤖
            </Typography>
          <img src={logo} className="hero-image" alt="Logo" />
          <Typography variant="h2" component="h2" className="hero-title">
            {greeting}, {name}!<br />
            Welcome 👋to Neural Shifter !<br/>🧠➡️🤖
          </Typography>
          <div className="typewriter-container">
            <Typography variant="h4" className="body-text typewriter-text">
              {text}<Cursor cursorColor='gray' />
            </Typography>
          </div>

        </div>
      )}
    </div>
  );
}

export default Home;
