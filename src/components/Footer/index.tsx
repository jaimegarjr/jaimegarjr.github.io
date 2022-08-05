import { Box, Grid, IconButton, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

export function Footer() {
  const handleNewTabLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#343434",
        padding: { xs: "10px 25px 10px", md: "10px 120px 10px" },
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Grid container>
            <Grid item>
              <IconButton
                sx={{ color: "#FFFFFF" }}
                onClick={() =>
                  handleNewTabLink(
                    "https://www.linkedin.com/in/jaime-garcia-jr/"
                  )
                }
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{ color: "#FFFFFF" }}
                onClick={() =>
                  handleNewTabLink("https://github.com/jaimegarjr")
                }
              >
                <GitHubIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{ color: "#FFFFFF" }}
                onClick={() =>
                  handleNewTabLink("https://www.instagram.com/jaimeg2725/")
                }
              >
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
    </Box>
  );
}
