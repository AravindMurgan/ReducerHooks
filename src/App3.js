import React from "react";
import CakeContainer from "./components2/CakeContainer";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CleanupEffect from "./Hooks/UseEffect/CleanupEffect";
import ToggleButton from "./Hooks/UseEffect/ToggleButton";
import CustomDataFetch from "./Hooks/UseEffect/CustomDataFetch";
import Parent from "./Hooks/UseContext/Parent";

function App3() {
  return (
    <Provider store={store}>
      <div className="App">
        <Parent />
      </div>
    </Provider>
  );
}

export default App3;
