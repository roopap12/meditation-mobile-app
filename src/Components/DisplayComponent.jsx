import React from 'react';

// This function checks if the hours i.e. (props.time.h) is 0.
// If it is, the function returns an empty string. If it's not, it returns span element.
function DisplayComponent(props) {
  // const h = () => {
  //    if(props.time.h === 0){
  //      return '';
  //    }else {
  //      return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
  //    }
  // }
  // This div contains the time display. It first displays the hours by calling h function. 
  // Then it displays the minutes, seconds, and milliseconds each in a span,
  return (
    <div className="margin">
       {/* {h()}&nbsp;&nbsp; */}
       <span>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>&nbsp;:&nbsp;
       <span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>&nbsp;:&nbsp;
       <span>{(props.time.ms >= 10)? props.time.ms : "0"+ props.time.ms}</span>
    </div>
  );
}

export default DisplayComponent;
