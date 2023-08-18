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
      link: "https://www.youtube.com/embed/9MazN_6wdqI"
    },
    "weight-reduce": {
      title: "Yoga for Weight Reduction",
      link: "https://www.youtube.com/embed/Vu_NnDWxKY4",
    }
      // Add more yoga types and corresponding videos here.
  };
  const currentVideo = yogaVideos[yogaType] || yogaVideos["stress-relief"];
  return (
    <div className="yoga">
    <iframe width="560" 
      height="315" 
      src={currentVideo.link}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
      ></iframe>
    <p> Yoga is really the art of waking.<br></br> 
        Yoga to reduce Stress and Relax yourself.</p>
    </div>
  );
}

export default Yoga;
