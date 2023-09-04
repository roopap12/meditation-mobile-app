import React from "react";
import { useLocation } from "react-router-dom";

function Meditation() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const meditationType = params.get("type");

  const meditations = {
   

    "morning": {

      audio: "Morning-Meditation.mp3",
      image: "meditation.jpg",
      message: "Embrace the morning sunshine with positivity."
    },
    "evening": {

      audio: "Mymusic.mp3",
      image: "Evening-Meditation.jpeg",
      message: "Relax and reflect on the day's events."
    },
    "healing": {

      audio: "Healing-Meditation.mp3",
      image: "Healing Meditation.jpg",
      message: "Relax and reflect on the day's events."
    },
    "sleeping": {

      audio: "Meditation-to-Sleep.mp3",
      image: "Meditation-to-Sleep.jpg",
      message: "Benefits that you can bring to bed."
    },
    // ... Add other meditation types here
  };

  const currentMeditation = meditations[meditationType] || meditations["morning"];
  // const currentMeditation = meditations[meditationType] ? meditations[meditationType] : meditations["morning"];

  return (
    <div className="Meditation" key={meditationType}>
       <img src={`/${currentMeditation.image}`} alt="Meditation" className="meditationImage" />
      <audio controls>
        <source src={`/${currentMeditation.audio}`} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p> Awake the world, one mind at a time!</p>
    </div>
    
  );
}

export default Meditation;
