import React from "react";
//function to display the images when clicked on yoga button and Meditation button
function Yoga() {
  return (
    <div className="yoga">
      {/* <img src="/yoga.jpeg" alt="Yoga" /> */}
      <iframe width="560" 
      height="315" 
      src="https://www.youtube.com/embed/9MazN_6wdqI" 
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
