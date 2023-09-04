import React from "react";
import { useLocation } from "react-router-dom";

function Meditation() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const meditationType = params.get("type");

  const meditations = {
    "meditation": { image: "relax.jpeg" },

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
    // ... Add other meditation types here
  };

  const currentMeditation = meditations[meditationType] || meditations["morning"];

  return (
    <div className="meditation">
      <img src={currentMeditation.image} alt={currentMeditation.title} className="meditationImage" />
      <p>{currentMeditation.message}</p>
      <audio >
        <source src={currentMeditation.audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      {/* <p>Awake the world, one mind at a time!</p> */}
    </div>
  );
}

export default Meditation;
