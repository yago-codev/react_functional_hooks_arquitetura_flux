import React, { useState } from "react";

function UseState() {
  const [number, setNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState();

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <br />
      <input
        type="text"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
      />
      <br />
      <input type="text" value={result} />
      <button
        type="button"
        onClick={() => setResult(parseInt(number) + parseInt(secondNumber))}
      >
        Somar
      </button>
    </div>
  );
}

export default UseState;
