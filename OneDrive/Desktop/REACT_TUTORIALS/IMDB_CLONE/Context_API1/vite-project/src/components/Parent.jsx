import React from "react";
import Child from "./Child";

import { FamilyContext } from "./FamilyContext";
import { useContext } from "react";

function Parent() {
  const message = useContext(FamilyContext);
  return (
    <div className="Parent">
      <h1>Parent {message.familyName}</h1>
      <Child />
    </div>
  );
}

export default Parent;
