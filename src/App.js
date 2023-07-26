import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Yoga from "./Components/Yoga";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTab, setCurrentTab] = useState("original");

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
  };

  // const selectTab = (tab) => setCurrentTab(tab);

  // let contentImage;

  // if (currentTab === 'meditation') {
  //   contentImage = ;
  // } else if (currentTab === 'yoga') {
  //   contentImage = yogaImg;
  // } else {
  //   contentImage = relaxImg;
  // }

  return (
    <div className="parent">
      <div className="child-special-text">
        Meditate, Relax and Stay Focused!
      </div>
      <div className="child">
        <Navbar setCurrentTab={setCurrentTab} />
      </div>

      <div className="main">
        <div className="button-box">
          <div className="child-meditation-timer">Meditation Timer</div>
          <button className="timer-button" onClick={startTimer}>
            Start
          </button>
          <button className="timer-button" onClick={stopTimer}>
            Stop
          </button>
          <button className="timer-button" onClick={resetTimer}>
            Reset
          </button>
        </div>

        <div className="child content">
          {currentTab === "original" && <img src="/relax.jpeg" alt="Meditation" />}
          {currentTab === "yoga" && <Yoga /> }
          {currentTab === "meditation" && <img src="/meditation.jpeg" alt="Meditation" />}
        </div>
      </div>
      <div className="child">Footer</div>
    </div>
  );
}

export default App;
