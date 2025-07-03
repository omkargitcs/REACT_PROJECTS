import "./App.css";
import React from "react";
import Family from "./components/Family";
import { FamilyContext } from "./components/FamilyContext";

function App() {
  const familymessage = {
    familyName: "fantastic4",
  };
  return (
    <>
      <FamilyContext.Provider value={familymessage}>
        <Family />
      </FamilyContext.Provider>
    </>
  );
}

export default App;
