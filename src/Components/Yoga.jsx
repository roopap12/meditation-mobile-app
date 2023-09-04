import React from "react";
import { useLocation } from "react-router-dom";
//function to display the images when clicked on yoga button and Meditation button
function Yoga() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const yogaType = params.get("type");

  const yogaVideos = {
    "stress-relief": {
      title: "Yoga to reduce Stress and Relax yourself",
      link: "https://www.youtube.com/embed/9MazN_6wdqI",
      message: "This session will help you relax and reduce stress."
    },
    "weight-reduce": {
      title: "Yoga for Weight Reduction",
      link: "https://www.youtube.com/embed/Vu_NnDWxKY4",
      message: "Burn calories and achieve a lean physique with this routine."
    },
    "power-yoga": {
      title: "Power Yoga",
      link: "https://www.youtube.com/embed/tZlKBv9e8nU",
      message: " It is important to realize how we all need the ability to access the power that lives within us all on a physical or metaphorical level."
    },
    "neck-shoulders-back": {
      title: "Yoga for Neck Shoulders and Upper Back",
      link: "https://www.youtube.com/embed/4vTJHUDB5ak",
      message: "Release tension in the neck, shoulders and upper back..."
    },
    // Add more yoga types and corresponding videos here.
  };
  const currentVideo = yogaVideos[yogaType] || yogaVideos["stress-relief"];
  return (
    <div className="yoga">
      <iframe
        width="560"
        height="315"
        src={currentVideo.link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <p>{currentVideo.message}</p>
      {/* <p>
        {" "}
        Yoga is really the art of waking.<br></br>
        Yoga to reduce Stress and Relax yourself.
<<<<<<< HEAD
      </p> */}
    </div>
=======
      </p>
    </div> 
>>>>>>> 8adf83062c5f8d5a0d6f9e25dd8954184bd4f88f
  );
}

export default Yoga;
