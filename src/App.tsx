import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { experienceData, projectData } from "./components/__mocks__/resumeData";
import { Section } from "./components/Section";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar />
      <Header />
      <div
        style={{
          backgroundColor: "#525252",
          padding: "30px 0px 30px 120px",
        }}
      >
        <Section title={"Experience"} listItems={experienceData} />
      </div>
      <div
        style={{
          backgroundColor: "#737373",
          padding: "30px 0px 30px 120px",
        }}
      >
        <Section title={"Projects"} listItems={projectData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
