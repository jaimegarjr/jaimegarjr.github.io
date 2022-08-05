import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { HashLink } from "react-router-hash-link";

export function NavBar() {
  const handleNewTabLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#343434",
        padding: { xs: "10px 50px 10px", md: "0px 120px 0px" },
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              fontFamily: "Poppins",
              color: "inherit",
              textDecoration: "none",
              letterSpacing: 5,
              overflow: "inherit",
            }}
          >
            JAIME GARCIA, JR.
          </Typography>

          <Grid
            container
            spacing={2}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {["experience", "projects"].map((page) => (
              <Grid item>
                <HashLink
                  smooth
                  to={`/#${page}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    key={page}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      textTransform: "none",
                      fontFamily: "Montserrat",
                      "&:hover": {
                        backgroundColor: "#424242",
                      },
                    }}
                  >
                    {page}
                  </Button>
                </HashLink>
              </Grid>
            ))}
            <Grid item>
              <Button
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "none",
                  fontFamily: "Montserrat",
                  "&:hover": {
                    backgroundColor: "#424242",
                  },
                }}
                endIcon={<LaunchIcon />}
                onClick={() => {
                  handleNewTabLink("https://dribbble.com/jaimegarciajr");
                }}
              >
                dribbble
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
