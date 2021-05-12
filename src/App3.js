import React from "react";
import CakeContainer from "./components2/CakeContainer";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux2/cakes/store";
import CleanupEffect from "./Hooks/UseEffect/CleanupEffect";
import ToggleButton from "./Hooks/UseEffect/ToggleButton";
import CustomDataFetch from "./Hooks/UseEffect/CustomDataFetch";
import Parent from "./Hooks/UseContext/Parent";
import CounterReducer from "./Hooks/UseReducer/CounterReducer";
import ReducerFetchData2 from "./Hooks/UseReducer/ReducerFetchData2";
import CakeBucket from "./redux2/cakes/CakeBucket";

function App3() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeBucket />
      </div>
    </Provider>
  );
}

export default App3;
