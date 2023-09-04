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
    <div className="Meditation">
      <img src="/Meditation.jpg" alt="Meditation" className="meditationImage" />
      
      <p> Awake the world, one mind at a time!</p>
    </div>
  );
}

export default Meditation;
