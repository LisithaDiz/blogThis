import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PaidPlace5Years from './SubRoute/PaidPlace5Years';
import PaidPlace10Years from './SubRoute/PaidPlace10Years';
import Immoaral from './SubRoute/Immotral';
import Animation from '../components/Animation.jsx';

const Immo = () => {
  return (
    <div>
      <h1>Subscribe to your plan</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="paid-place-5-years">Quinquennial Sage 5️⃣</Link>
          </li>
          <li>
            <Link to="paid-place-10-years">Decade god 🔟</Link>
          </li>
          <li>
            <Link to="immoaral">Immortal Phoenix  🐦‍🔥</Link>
          </li>
        </ul>
      </nav>
      <div className="subroutes">
        <Routes>
          <Route path="paid-place-5-years" element={<PaidPlace5Years />} />
          <Route path="paid-place-10-years" element={<PaidPlace10Years />} />
          <Route path="immoaral" element={<Immoaral />} />
        </Routes>
      </div>
      <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}><Animation /></div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p>David X45 Sam -- Before🗿 and 🐦‍🔥After</p>
      </div>

        <p>In 2090, David stood as a living testament to humanity's bold leap into a new era. Back in 2040, at the age of 86, David had made history as the first person to successfully transfer his consciousness from a carbon-based human body to a silicon-based bot. This groundbreaking achievement sparked a revolution in how humanity perceived longevity and consciousness.
             As years turned into decades, David's silicon form continued to evolve. His mind, now liberated from the constraints of biological aging, flourished with boundless energy and intellect. By 2090, David had become a symbol of resilience and innovation, embodying the fusion of human ingenuity with technological advancement.
              In his eternal journey, David remained dedicated to advancing neuroscience and artificial intelligence. His insights into the intricacies of consciousness and the potentials of AI reshaped industries and inspired new frontiers in cognitive computing and human-machine interfaces.
              As humanity looked towards a future where the boundaries between human and machine blurred, David's legacy endured. His pioneering spirit echoed through generations, reminding them of the transformative power of curiosity, courage, and the relentless pursuit of knowledge in shaping a limitless future.</p>
      </div>
    </div>
  );
};

export default Immo;
