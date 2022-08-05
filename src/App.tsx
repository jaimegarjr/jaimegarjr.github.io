import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { experienceData, projectData } from "./components/__mocks__/resumeData";
import { Section } from "./components/Section";
import { Box, Theme } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <NavBar />
      <Box
        sx={(theme: Theme) => ({
          ...theme.mixins.toolbar,
        })}
      />
      <Header />
      <Box
        style={{
          backgroundColor: "#525252",
          padding: "30px 0px 30px 120px",
        }}
      >
        <Section title={"Experience"} listItems={experienceData} />
      </Box>
      <Box
        style={{
          backgroundColor: "#737373",
          padding: "30px 0px 30px 120px",
        }}
      >
        <Section title={"Projects"} listItems={projectData} />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
