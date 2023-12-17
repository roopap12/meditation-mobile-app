// import React from "react";

// function BtnComponent(props) {
//   return (
//     <div>
//       {props.status === 0 ? (
//         <button
//           className="stopwatch-btn stopwatch-btn-gre"
//           onClick={props.start}
//         >
//           Start
//         </button>
//       ) : (
//         ""
//       )}

//       {props.status === 1 ? (
//         <div>
//           <button
//             className="stopwatch-btn stopwatch-btn-red"
//             onClick={props.stop}
//           >
//             Stop
//           </button>
//           <button
//             className="stopwatch-btn stopwatch-btn-yel"
//             onClick={props.reset}
//           >
//             Reset
//           </button>
//         </div>
//       ) : (
//         ""
//       )}

//       {props.status === 2 ? (
//         <div>
//           <button
//             className="stopwatch-btn stopwatch-btn-gre"
//             onClick={props.resume}
//           >
//             Resume
//           </button>
//           <button
//             className="stopwatch-btn stopwatch-btn-yel"
//             onClick={props.reset}
//           >
//             Reset
//           </button>
//         </div>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// }

// export default BtnComponent;

import React from "react";
import { Button, Grid, Paper } from "@mui/material";

function BtnComponent(props) {
  return (
    <Paper elevation={3} style={{ padding: "10px" }}>
      <Grid container justifyContent="center" spacing={1}>
        {props.status === 0 && (
          <Grid item>
            <Button
              variant="contained"
              style={{ backgroundColor: "#add8e6", color: "black" }}
              onClick={props.start}
            >
              Start
            </Button>
          </Grid>
        )}

        {props.status === 1 && (
          <>
            <Grid item>
              <Button
                variant="contained"
                style={{ backgroundColor: "#d9534f", color: "black" }}
                onClick={props.stop}
              >
                Stop
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                style={{ backgroundColor: "#f0ad4e", color: "black" }}
                onClick={props.reset}
              >
                Reset
              </Button>
            </Grid>
          </>
        )}

        {props.status === 2 && (
          <>
            <Grid item>
              <Button
                variant="contained"
                style={{ backgroundColor: "#add8e6", color: "black" }}
                onClick={props.resume}
              >
                Resume
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                style={{ backgroundColor: "#f0ad4e", color: "black" }}
                onClick={props.reset}
              >
                Reset
              </Button>
            </Grid>
          </>
        )}
      </Grid>
    </Paper>
  );
}

export default BtnComponent;

