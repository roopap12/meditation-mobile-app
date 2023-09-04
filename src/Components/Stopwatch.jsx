import React, { useState, useRef, useEffect } from "react";
import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";

function Stopwatch({ selectedMeditation }) {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [userTime, setUserTime] = useState(0);
  const audioRef = useRef(null);
  const [end, setEnd] = useState(false);
  const [volume, setVolume] = useState(1);
  const fadeInterval = useRef(null);
  const endSoundRef = useRef(null);

  const meditationMusic = {
    "morning": "/Morning-Meditation.mp3",
    "evening": "/Mymusic.mp3",
    "healing": "/Healing-Meditation.mp3",
    "sleeping": "/Meditation-to-Sleep"
  };

  const start = () => {
    setTime({ ms: 0, s: 0, m: parseInt(userTime) });
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
    if (audioRef.current) {
      audioRef.current.src = meditationMusic[selectedMeditation];
      audioRef.current.play();
    }
  };

  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m;

  const fadeAudio = () => {
    if (volume > 0.1) {
      setVolume((prevVolume) => prevVolume - 0.1);
      audioRef.current.volume = volume;
    } else {
      clearInterval(fadeInterval.current);
    }
  };

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
    if (updatedM === 0 && updatedS <= 10 && !fadeInterval.current) {
      fadeInterval.current = setInterval(fadeAudio, 1000);
    }
    setTime({ ms: updatedMs, s: updatedS, m: updatedM });
  };

  const stop = () => {
    clearInterval(interv);
    clearInterval(fadeInterval.current);
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
    clearInterval(fadeInterval.current);
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

  useEffect(() => {
    if (end) {
      endSoundRef.current.play();
    }
  }, [end]);

  return (
    <div className="stopwatch">
      <DisplayComponent time={time} />
      <BtnComponent
        status={status}
        resume={resume}
        reset={reset}
        stop={stop}
        start={start}
      />
      <div style={{ fontSize: "12px" }}>
        Set Meditation Time (minutes):
        <input
          type="number"
          value={userTime}
          onChange={handleUserTimeChange}
          min="1"
        />
      </div>
      <audio ref={audioRef} />
      <audio ref={endSoundRef} src="/Endtime.mp3" />
    </div>
  );
}

export default Stopwatch;
