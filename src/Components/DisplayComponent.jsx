// import React from "react";

// // This function checks if the hours i.e. (props.time.h) is 0.
// // If it is, the function returns an empty string. If it's not, it returns span element.
// function DisplayComponent(props) {
//   return (
//     <div className="margin">
//       {/* {h()}&nbsp;&nbsp; */}
//       <span>{props.time.m >= 10 ? props.time.m : "0" + props.time.m}</span>
//       &nbsp;:&nbsp;
//       <span>{props.time.s >= 10 ? props.time.s : "0" + props.time.s}</span>
//       &nbsp;:&nbsp;
//       <span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
//     </div>
//   );
// }

// export default DisplayComponent;

import React from "react";
import { Typography, Grid, Paper } from "@mui/material";

function DisplayComponent(props) {
  return (
    <Paper elevation={3} style={{ padding: "10px" }}>
      <Grid container justifyContent="center" alignItems="center">
        <Typography variant="h5">
          {props.time.m >= 10 ? props.time.m : "0" + props.time.m}
        </Typography>
        <Typography variant="h5">:</Typography>
        <Typography variant="h5">
          {props.time.s >= 10 ? props.time.s : "0" + props.time.s}
        </Typography>
        <Typography variant="h5">:</Typography>
        <Typography variant="h5">
          {props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}
        </Typography>
      </Grid>
    </Paper>
  );
}

export default DisplayComponent;

