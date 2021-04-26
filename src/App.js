import React, { useReducer } from "react";
import "./styles.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import CompA from "./components/useContextCounter/CompA";
import CompB from "./components/useContextCounter/CompB";
import CompC from "./components/useContextCounter/CompC";

export const CountContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{
        countState: count,
        countDispatch: dispatch
      }}
    >
      <div className="App">
        {/* <Counter1/> */}
        {/* <Counter2 /> */}
        <CompA />
        {/* <CompB />
        <CompC /> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
