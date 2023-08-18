import React, { useState, useRef } from 'react';
import DisplayComponent from './DisplayComponent';
import BtnComponent from './BtnComponent';

function Stopwatch() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [userTime, setUserTime] = useState(0);  
  const audioRef = useRef(null);
  const [end, setEnd] = useState(false);

  const start = () => {
    setTime({ ms: 0, s: 0, m: parseInt(userTime) });
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m;

  const run = () => {
    if (updatedMs === 0) {
      if (updatedS === 0) {
        if (updatedM === 0) {
          stop();
          return;
        } else {
          updatedM--;
          updatedS = 59;
          updatedMs = 99;
        }
      } else {
        updatedS--;
        updatedMs = 99;
      }
    } else {
      updatedMs--;
    }
    setTime({ ms: updatedMs, s: updatedS, m: updatedM });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
    setTime({ ms: 0, s: 0, m: userTime });
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setEnd(true);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: userTime });
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setEnd(false);
  };

  const handleUserTimeChange = (e) => {
    const newTime = parseInt(e.target.value, 10);
    setUserTime(newTime);
    setTime({ ms: 0, s: 0, m: newTime });
  };

  const resume = () => start();

  return (
    <div className="stopwatch">
      <DisplayComponent time={time} />
      <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start} />
      <div style={{ fontSize: '12px' }}>
        Set Meditation Time (minutes): 
        <input type="number" value={userTime} onChange={handleUserTimeChange} min="1" />
      </div>
      <audio ref={audioRef} src="/Mymusic.mp3" />
    </div>
  );
}

export default Stopwatch;





