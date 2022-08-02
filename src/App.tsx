import { ThemeContext } from "@emotion/react";
import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
