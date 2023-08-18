//import the required libraries and components to be used in this file.
// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Navbar from "./Components/Navbar";
// import Yoga from "./Components/Yoga";
// import Meditation from "./Components/Meditation";
// import Footer from "./Components/Footer";
// import Form from "./Components/Form";
// import { Outlet } from "react-router-dom";
// import Home from "./Components/Home";
// import Stopwatch from "./Components/Stopwatch";
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// //States for Timer and keep the tab current
// function App() {
//   const [timer, setTimer] = useState(10 * 60 * 1000);
//   const [isRunning, setIsRunning] = useState(false);
//   const [currentTab, setCurrentTab] = useState("original");
//   const [hasStarted, setHasStarted] = useState(false);
//   const [currentTime, setCurrentTime] = useState(
//     new Date().toLocaleTimeString()
//   );
 
//   const startTimer = () => {
//     setIsRunning(true);
//     setHasStarted(true);
//   };
//   //Resets the timer whenever the rest button is clicked
//   const resetTimer = () => {
//     setTimer(10 * 60 * 1000);
//     setIsRunning(false);
//     setHasStarted(false);
//   };

//   //This displays the current time every second
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date().toLocaleTimeString());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
  
//   return (
//     <div className="parent">
//       <div className="child-special-text">
//         Meditate, Relax and Stay Focused!
//       </div>

//       <div className="child">
//         <Navbar setCurrentTab={setCurrentTab} />
//       </div>

//       <div className="main">
//         <div className="button-box">
//           <div className="child-meditation-timer">Meditation Timer</div>
//           <div className="timer">{currentTime}</div>
//           <div className="stopwatch-box">
//             <Stopwatch />
//           </div>
//         </div>

//         <div className="child content">
          
//           <Outlet />
//         </div>
//       </div>
//       <div className="child-footer">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Stopwatch from "./Components/Stopwatch";

function App({ children }) {
  const [timer, setTimer] = useState(10 * 60 * 1000);
  const [isRunning, setIsRunning] = useState(false);
  const [currentTab, setCurrentTab] = useState("original");
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
          <div className="timer">{currentTime}</div>
          <div className="stopwatch-box">
            <Stopwatch />
          </div>
        </div>
        <div className="child content">
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