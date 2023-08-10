import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
//function to navigate the Yoga and Meditation Tab
function Navbar({ setCurrentTab }) {
  return (
    <>
      <div className="navbar">
        <div className="nav-item" onClick={() => setCurrentTab("yoga")}>
          <Link to="/Yoga" className="link">Yoga</Link>
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
