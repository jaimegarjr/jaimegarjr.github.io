import React from "react";
import { Box, Grid } from "@mui/material";
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
    <Box
      sx={{
        backgroundColor: "#424242",
        padding: { xs: "10px 50px 10px", md: "0px 120px 30px" },
      }}
    >
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
                url={"/assets/Resume - Jaime Garcia, Jr. (RECENT).pdf"}
              />
            </Grid>
            <Grid item>
              <ActionButton
                label={"github"}
                variant="contained"
                icon={<GitHubIcon />}
                url={"https://github.com/jaimegarjr"}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={7}>
          <Grid
            container
            spacing={2}
            sx={{ flexWrap: "nowrap", display: { xs: "none", md: "flex" } }}
          >
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
