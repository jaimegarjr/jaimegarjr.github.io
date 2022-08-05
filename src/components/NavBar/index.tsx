import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { HashLink } from "react-router-hash-link";
import { handleClickUrl } from "../utils/handleClickUrl";

export function NavBar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "#343434",
        padding: { xs: "0px 50px 0px", md: "0px 120px 0px" },
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
                  handleClickUrl("https://dribbble.com/jaimegarciajr");
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
