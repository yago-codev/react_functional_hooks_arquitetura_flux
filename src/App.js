import React, { useState, useEffect } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [result, setResult] = useState();

  useEffect(() => {
    console.log("variável numero", number);
  });

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
      />
      <br />
      <input
        type="text"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value.replace(/\D/g, ""))}
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

export default App;
