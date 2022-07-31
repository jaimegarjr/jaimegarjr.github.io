import React from "react";
import { Button, Box, Grid } from "@mui/material";
import { HeaderText } from "./HeaderText";
import { HeaderAvatar } from "./HeaderAvatar";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ActionButton } from "./ActionButton";

export function Header() {
  const images: string[] = [
    "/images/jaime_illustration.jpg",
    "/images/jaime_linkedin.jpg",
    "/images/jaime_casual.jpg",
  ];

  return (
    // styling for div containing header
    //   style={{
    //     backgroundColor: "#424242",
    //     width: "100%",
    //     height: 430,
    //   }}
    <Box>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item md={5}>
          <HeaderText />
          <Grid container spacing={2}>
            <Grid item>
              <ActionButton
                label={"resume"}
                variant="contained"
                icon={<DownloadIcon />}
              />
            </Grid>
            <Grid item>
              <ActionButton
                label={"github"}
                variant="contained"
                icon={<GitHubIcon />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7}>
          <Grid container spacing={2} style={{ flexWrap: "nowrap" }}>
            {images.map((i: string, index: number) => {
              return (
                <Grid item>
                  <HeaderAvatar key={index} image={i} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
