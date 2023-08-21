import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Stopwatch from "./Components/Stopwatch";
import Header from "./Components/Header";

function App({ children }) {
  //const [timer, setTimer] = useState(10 * 60 * 1000);
  //const [isRunning, setIsRunning] = useState(false);
  const [currentTab, setCurrentTab] = useState("original");
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="parent">
      <Header />
      <div className="child">
        <Navbar setCurrentTab={setCurrentTab} />
      </div>
      <div className="main">
        <div className="button-box">
          <div className="child-meditation-timer">Meditation Timer</div>
          <div className="timer">{currentTime}</div>
          <div className="stopwatch-box">
            <Stopwatch />
          </div>
        </div>
        <div className="child content">{children}</div>
      </div>
      <div className="child-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
