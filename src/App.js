import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Stopwatch from "./Components/Stopwatch";
import Header from "./Components/Header";
import Meditation from "./Components/Meditation";
import WeatherComponent from './Components/Weather';
import ChatBotUI from './Components/ChatBotUI';

import { useLocation } from "react-router-dom";

function App({ children }) {
  const [currentTab, setCurrentTab] = useState("original");
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const location = useLocation();
  const params = useMemo(() => {
    return new URLSearchParams(location.search);
  }, [location.search]);
  const [selectedMeditation, setSelectedMeditation] = useState(
    params.get("type") || "morning"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedMeditation(params.get("type") || "morning");
  }, [location, params]);

  return (
    <div className="parent" style={{ backgroundColor: "#add8e6", minHeight: "100vh", padding: "20px" }}>
  <Header />
  <div className="child">
    <Navbar setCurrentTab={setCurrentTab} setSelectedMeditation={setSelectedMeditation} />
  </div>
  <div className="main">
    <div className="left-content">
      <div className="button-box">
        <div className="child-meditation-timer">Meditation Timer</div>
        <div className="timer">{currentTime}</div>
        <div className="stopwatch-box">
          <Stopwatch selectedMeditation={selectedMeditation} />
        </div>
        <div className="weather-box">
          <WeatherComponent />
        </div>
      </div>
    </div>
    <div className="separator"></div>
    <div className="right-content">
      <div className="child content">
        {currentTab === "meditation" && (
          <Meditation selectedMeditation={selectedMeditation} />
        )}
        {children}
      </div>
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
