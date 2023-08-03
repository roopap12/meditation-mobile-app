import React from 'react';
import '../App.css';
//function to navigate the Yoga and Meditation Tab 
function Navbar({setCurrentTab}) {
   
  return (
    <>
    <div className="navbar">
      <div className="nav-item" onClick={() => setCurrentTab('yoga')}>Yoga</div>
      <div className="nav-item" onClick={() => setCurrentTab('meditation')}>Meditation</div>
      <div className="nav-item" onClick={() => setCurrentTab('form')}>Registration Form</div>
    </div>
    </>
  );
}



export default Navbar;