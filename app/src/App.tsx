import React from "react";
import "./App.scss";
import { NavBar } from "./components";
import Landing from "./components/home/Landing";
import { links } from "./mocks/NavBarData";

function App() {
  return (
    <div className="App">
      <NavBar links={links} />
      <Landing />
    </div>
  );
}

export default App;
