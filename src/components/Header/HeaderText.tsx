import { Typography } from "@mui/material";
import React from "react";

export function HeaderText() {
  const headerTextStyling = {
    fontFamily: "Poppins",
    fontWeight: 800,
    fontSize: 80,
    color: "white",
  };

  return (
    <div>
      <Typography sx={headerTextStyling}>Hey!</Typography>
      <Typography sx={headerTextStyling}>I'm Jaime.</Typography>
      <div style={{ paddingBottom: 20 }}>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: 20,
            color: "white",
          }}
        >
          young professional interested in software development and UI/UX design
        </Typography>
      </div>
    </div>
  );
}
