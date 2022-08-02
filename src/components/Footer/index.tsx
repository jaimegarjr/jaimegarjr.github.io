import { Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <div
      style={{
        backgroundColor: "#343434",
        padding: "10px 120px 10px",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <IconButton sx={{ color: "#FFFFFF" }}>
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={{ color: "#FFFFFF" }}>
                <GitHubIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton sx={{ color: "#FFFFFF" }}>
                <InstagramIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            sx={{ fontFamily: "Montserrat", fontSize: 14, color: "#FFFFFF" }}
          >
            © Jaime Garcia, Jr.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
