import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Stopwatch from "./Components/Stopwatch";
import Header from "./Components/Header";
import Meditation from "./Components/Meditation";
import { useLocation } from "react-router-dom";  // Extract meditation type from the location

function App({ children }) {
  const [currentTab, setCurrentTab] = useState("original");
  // const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Get the current location to determine the meditation type
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const [selectedMeditation, setSelectedMeditation] = useState(params.get("type") || "morning");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Update selectedMeditation when the URL changes
  useEffect(() => {
    setSelectedMeditation(params.get("type") || "morning");
  }, [location, params]);

  return (
    <div className="parent">
      <Header />
      <div className="child">

        <Navbar setCurrentTab={setCurrentTab} setSelectedMeditation={setSelectedMeditation} />
      </div>
      <div className="main">
        <div className="button-box">
          <div className="child-meditation-timer">Meditation Timer</div>
          <div className="timer">{currentTime}</div>
          <div className="stopwatch-box">
            <Stopwatch selectedMeditation={selectedMeditation} />
          </div>
        </div>
        <div className="child content">
          {currentTab === "meditation" && <Meditation selectedMeditation={selectedMeditation} />}
          {children}
        </div>
      </div>
      <div className="child-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
