//import the required libraries and components to be used in this file.
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Yoga from "./Components/Yoga";
import Meditation from "./Components/Meditation";
import Footer from "./Components/Footer";
import Form from "./Components/Form";

//States for Timer and keep the tab current
function App() {
  const [timer, setTimer] = useState(10 * 60 * 1000);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTab, setCurrentTab] = useState("original");
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  //useEffect Hook for Time Management
  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1000);
      }, 1000);
    } else {
      clearInterval(interval);
      if (timer === 0) {
        // This is where you would put audio to play
        console.log("Timer finished");
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);
  //Function to start the timer whenver the start button is clicked
  const startTimer = () => {
    setIsRunning(true);
    setHasStarted(true);
  };
  //Resets the timer whenever the rest button is clicked
  const resetTimer = () => {
    setTimer(10 * 60 * 1000);
    setIsRunning(false);
    setHasStarted(false);
  };

  //This displays the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  //importing Form component from Form.js in App.js file.
  // function App() {
  //   return (
  //     <Form/>
  //   );
  // }

  //Components - renders (Meditation, Navbar, Yoga, Footer)
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
          <button className="timer-button" onClick={resetTimer}>
            Reset
          </button>
          <div>
            {hasStarted ? <div className="timer">{currentTime}</div> : null}
          </div>
        </div>

        <div className="child content">
          {currentTab === "original" && (
            <img src="/relax.jpeg" alt="Meditation" />
          )}
          {currentTab === "yoga" && <Yoga />}
          {currentTab === "meditation" && <Meditation />}
          {currentTab === "footer" && <Footer />}
        </div>
      </div>
      <div className="child-footer">
        {currentTab === "Form" ? <Form /> : null}
        <Footer />
      </div>
    </div>
  );
}

export default App;
