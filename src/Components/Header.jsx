// import React from "react";

// function Header() {
//   return (
//     <div className="child-special-text">Getting Started with Mindfullness!</div>
//   );
// }

// export default Header;

import React from "react";
import { Typography, Paper } from "@mui/material";

function Header() {
  return (
    <Paper elevation={2} className="child-special-text">
      <Typography variant="h5">Getting Started with Mindfulness!</Typography>
    </Paper>
  );
}

export default Header;

