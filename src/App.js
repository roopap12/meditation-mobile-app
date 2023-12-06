import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Stopwatch from "./Components/Stopwatch";
import Header from "./Components/Header";
import Meditation from "./Components/Meditation";
import Weather from './Components/Weather';
import ChatBotUI from './Components/ChatBotUI';
// import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom"; // Extract meditation type from the location

function App({ children }) {
  const [currentTab, setCurrentTab] = useState("original");
  // const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  // Get the current location to determine the meditation type
  const location = useLocation();
  const params = useMemo(() => {
    return new URLSearchParams(location.search);
  }, [location.search]);
  // const params = new URLSearchParams(location.search);
  const [selectedMeditation, setSelectedMeditation] = useState(
    params.get("type") || "morning"
  );

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
      
      <Navbar
          setCurrentTab={setCurrentTab}
          setSelectedMeditation={setSelectedMeditation}
        />
      </div>
      <div className="main">
        <div className="button-box">
          <div className="child-meditation-timer">Meditation Timer</div>
          <div className="timer">{currentTime}</div>
          <div className="stopwatch-box">
            <Stopwatch selectedMeditation={selectedMeditation} />
          </div>
          <div className="weather-box">
            <Weather />
          </div>
        </div>
        <div className="child content">
          {currentTab === "meditation" && (
            <Meditation selectedMeditation={selectedMeditation} />
          )}
          {children}
          
        </div>
      </div>
      <div className="child-footer">
        <Footer />
        <ChatBotUI />
      </div>
    </div>
  );
}

export default App;

