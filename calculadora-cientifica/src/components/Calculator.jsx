import React from "react";
import DisplayWindow from "./DisplayWindow";
import KeysWindow from "./KeysWindow";

const calculator = () => {
  return (
    <div className="calculator">
      <DisplayWindow />
      <KeysWindow />
    </div>
  );
};

export default calculator;
