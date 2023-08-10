// Imported files from react using two hooks useState and useRef. useRef is used to handle the audio DOM element.
// Imported DisplayComponent and BtnComponent
import React, {useState, useRef} from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';

// The main function App is set to set the time with setInterval. audioRef is used to set the audio
function Stopwatch () {
  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const audioRef = useRef(null); // This line creates a reference to the audio element
  const [end, setEnd] = useState(false)

  // The start function is set to start the stopwatch. The run function updates the time.
  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
    if (audioRef.current) {
      audioRef.current.play(); // Plays the audio when the start function is invoked
    }
    setInterval(() => setEnd(true), 600000)
  };

  // These variables are used for tracking each units of time.
  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  // The run function updates the time. It checks if the minutes, seconds, or milliseconds have reached their maximum values, and if they have, 
  // it resets them to 0 and increments the next highest unit of time. 
  // It then calls setTime to update the time with the new values.
  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };

  // The stop function is used to clear the time interval and stop the audio
  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    if (audioRef.current) {
      audioRef.current.pause(); // Pauses the audio when the stop function is invoked
    }
    setEnd(false)
  };

  // Check if 10 minutes have passed every time the time updates
  React.useEffect(() => {
    if(updatedH === 0 && updatedM === 10 && updatedS === 0 && updatedMs === 0){
      stop();
    }
  }, [time]);

  // The reset function is used to reset the time and reset the audio
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
    if (audioRef.current) {
      audioRef.current.pause(); // Pauses the audio when the reset function is invoked
      audioRef.current.currentTime = 0; // This line resets the audio to the beginning
    }
    setEnd(false)

  };

  // The resume function is set to start the stopwatch from where it stopped
  const resume = () => start();

  // The return function is to render the stopwatch with start, stop, and reset functions
  // and the audio file to play the music
  return (
        <div className="stopwatch">
          <DisplayComponent time={time}/>
          <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
          <audio ref={audioRef} src="/Mymusic.mp3" /> {/* This line adds the audio element */}
          {end && <p> end! </p>}
        </div>
  );
}

export default Stopwatch; // This exports the App function to be imported and used in other parts of the application

