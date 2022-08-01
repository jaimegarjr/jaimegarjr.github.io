import React from "react";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar />
      <div
        style={{
          backgroundColor: "#424242",
          paddingLeft: 50,
          paddingRight: 50,
          paddingBottom: 30,
        }}
      >
        <Header />
      </div>
    </div>
  );
}

export default App;
