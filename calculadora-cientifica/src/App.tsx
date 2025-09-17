import React from "react";
import Calculator from "./components/Calculator";
const App = () => {
  return (
    <div>
      <h1 className="App">
        <Calculator />
        <p className="developer">
          proyecto de <span>Mariano Cosco</span>
        </p>
      </h1>
    </div>
  );
};

export default App;
