import React from "react";
import Granddaughter from "./Granddaughter";
import Grandson from "./Grandson";
import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";
function Child() {
  const message = useContext(FamilyContext);
  return (
    <div className="children">
      <h1>child {message.familyName}</h1>
      <Granddaughter />
      <Grandson />
    </div>
  );
}

export default Child;
