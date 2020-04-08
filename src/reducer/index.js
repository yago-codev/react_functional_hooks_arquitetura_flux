import React, { useState } from "react";

import useStore from "./sumReducer";

function ReducerHook() {
  const [number, setNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [store, dispatch] = useStore();

  const sum = () => {
    const numberInt = parseInt(number);
    const secondNumberInt = parseInt(secondNumber);

    console.log("Dispachando a action");

    dispatch({
      type: "SUM",
      payload: numberInt + secondNumberInt,
    });
  };

  const sub = () => {
    const numberInt = parseInt(number);
    const secondNumberInt = parseInt(secondNumber);

    console.log("Dispachando a action");

    dispatch({
      type: "SUB",
      payload: numberInt - secondNumberInt,
    });
  };

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

      <input type="text" value={store.result} readOnly />

      <button type="button" onClick={sum}>
        Somar
      </button>
      <button type="button" onClick={sub}>
        Subtrair
      </button>
    </div>
  );
}

export default ReducerHook;
