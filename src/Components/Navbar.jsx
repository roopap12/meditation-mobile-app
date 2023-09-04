import React, { useState } from "react";
import { Link } from "react-router-dom";
//function to navigate the Yoga and Meditation Tab
function Navbar({ setCurrentTab }) {
  const [showYogaDropdown, setShowYogaDropdown] = useState(false);
  const [showMeditationDropdown, setShowMeditationDropdown] = useState(false);

  const toggleYogaDropdown = () => {
    setShowYogaDropdown(!showYogaDropdown); // toggle dropdown
    // Optional: Add any other actions you want to execute when the Yoga tab is clicked
  };

  const toggleMeditationDropdown = () => {
    setShowMeditationDropdown(!showMeditationDropdown); // toggle dropdown
    // Optional: Add any other actions you want to execute when the Meditation tab is clicked
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/">
          <img src="/logo-meditation.png" alt="My Logo" className="logo-img" />
        </Link>
      </div>

      {/* Home Tab */}
      <div className="nav-item">
        <Link to="/" className="link">Home</Link>
      </div>

      {/* Yoga Tab */}
      <div className="nav-item" onClick={toggleYogaDropdown}>
        Yoga
        {showYogaDropdown && (
          <div className="yoga-dropdown">
            <Link to="/Yoga?type=stress-relief" className="link">
              Yoga for Stress Relief
            </Link>
            <Link to="/Yoga?type=weight-reduce" className="link">
              Yoga for Weight Reduction
            </Link>
            <Link to="/Yoga?type=power-yoga" className="link">Power Yoga</Link>
            <Link to="/Yoga?type=neck-shoulders-back" className="link">Yoga for Neck Shoulders and Back Pain</Link>
            {/* Add more yoga types here as needed */}
          </div>
        )}
      </div>

      {/* Meditation Tab */}
      <div className="nav-item" onClick={toggleMeditationDropdown}>
        Meditation
        {showMeditationDropdown && (
          <div className="meditation-dropdown">
            <Link to="/Meditation?type=morning" className="link">
              Morning Meditation
            </Link>
            <Link to="/Meditation?type=evening" className="link">
              Evening Meditation
            </Link>
            {/* Add more meditation types here as needed */}
          </div>
        )}
      </div>

      {/* Registration Form Tab */}
      <div className="nav-item" onClick={() => setCurrentTab("form")}>
        <Link to="/Form" className="link">
          Registration Form
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
