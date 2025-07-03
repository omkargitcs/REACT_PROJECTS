import React from "react";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

function Granddaughter() {
  const message = useContext(FamilyContext);
  return (
    <div className="gdaughter">
      <h1>Granddaughter {message.familyName}</h1>
    </div>
  );
}

export default Granddaughter;
