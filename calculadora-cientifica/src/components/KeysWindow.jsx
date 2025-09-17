import React from "react";

const KeysWindow = () => {
  const sciKeys = ["sin", "cos", "ln", "log", "tan", "π", "e", "^", "!", "√"];

  const basicKeys = [
    "7",
    "8",
    "9",
    "*",
    "/",
    "4",
    "5",
    "6",
    "-",
    "(",
    "1",
    "2",
    "3",
    "+",
    ")",
    ".",
    "0",
    "DEL",
    "AC",
    "=",
  ];
  return (
    <div className="keysWindow">
      <div className="keys_scientific">
        {sciKeys.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
      <div className="keys_basic">
        {basicKeys.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default KeysWindow;
