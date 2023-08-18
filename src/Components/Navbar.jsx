import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
//function to navigate the Yoga and Meditation Tab
function Navbar({ setCurrentTab }) {
  const [showYogaDropdown, setShowYogaDropdown] = useState(false);
  const handleDropdownClick = (e) => {
    e.stopPropagation();
  }
    return (
    <>
      <div className="navbar">
      <div 
          className="nav-item" 
          onMouseEnter={() => setShowYogaDropdown(true)} 
          onMouseLeave={() => setShowYogaDropdown(false)}
        >
          Yoga
          {showYogaDropdown && (
            <div className="yoga-dropdown" onClick={handleDropdownClick}>
              <Link to="/Yoga?type=stress-relief" className="link">Yoga for Stress Relief</Link>
              <Link to="/Yoga?type=weight-reduce" className="link">Yoga for Weight Reduction</Link>
              {/* Add more yoga types here as needed */}
            </div>
          )}
        </div>

        <div className="nav-item" onClick={() => setCurrentTab("meditation")}>
          <Link to="/Meditation" className="link">Meditation</Link>
        </div>

        <div className="nav-item" onClick={() => setCurrentTab("form")}>
          <Link to="/Form" className="link">Registration Form</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
