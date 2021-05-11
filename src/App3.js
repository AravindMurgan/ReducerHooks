import React from "react";
import CakeContainer from "./components2/CakeContainer";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CleanupEffect from "./Hooks/UseEffect/CleanupEffect";

function App3() {
  return (
    <Provider store={store}>
      <div className="App">
        <CleanupEffect />
      </div>
    </Provider>
  );
}

export default App3;
