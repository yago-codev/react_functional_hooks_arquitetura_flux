import { useReducer } from "react";

const initial_state = {
  result: "",
};

const sumReducer = (state = initial_state, action) => {
  console.log("Action executada: ", JSON.stringify(action));

  switch (action.type) {
    case "SUB":
    case "SUM":
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

const useStore = () => useReducer(sumReducer, initial_state);

export default useStore;
