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
        id="experience"
        sx={{
          backgroundColor: "#525252",
          padding: { xs: "10px 50px 10px", md: "30px 120px 30px 120px" },
        }}
      >
        <Section title={"Experience"} listItems={experienceData} />
      </Box>
      <Box
        id="projects"
        sx={{
          backgroundColor: "#737373",
          padding: { xs: "10px 50px 10px", md: "30px 120px 30px 120px" },
        }}
      >
        <Section title={"Projects"} listItems={projectData} />
      </Box>

      <Footer />
    </Box>
  );
}

export default App;
