import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export function NavBar() {
  const pages: string[] = ["experience", "projects", "dribbble"];

  return (
    <AppBar
      sx={{
        backgroundColor: "#343434",
        paddingLeft: "120px",
        paddingRight: "120px",
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
            }}
          >
            JAIME GARCIA, JR.
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
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
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
