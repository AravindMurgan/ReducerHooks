import React, { useEffect, useReducer } from "react";

const initialState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        ...state,
        count: state.count + action.value
      };
    case "Decrement":
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return {
        state
      };
  }
};

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h3> {state.count} </h3>
      <button onClick={() => dispatch({ type: "Increment" })}>
        Increment Counter
      </button>
      <button onClick={() => dispatch({ type: "Increment", value: 5 })}>
        Increment Counter
      </button>
    </div>
  );
}

export default CounterReducer;
