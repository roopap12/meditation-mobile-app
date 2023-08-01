import React from 'react';
import '../App.css';
//function to navigate the Yoga and Meditation Tab 
function Navbar({setCurrentTab}) {

  function handleClick (tabName) {
    setCurrentTab(tabName)
    
  }
   
  return (
    <>
    <div className="navbar">
      <div className="nav-item" onClick={() => handleClick('yoga')}>Yoga</div>
      <div className="nav-item" onClick={() => handleClick('meditation')}>Meditation</div>
    </div>
    </>
  );
}



export default Navbar;