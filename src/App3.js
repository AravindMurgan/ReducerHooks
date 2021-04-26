import React from "react";
import CakeContainer from "./components2/CakeContainer";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App3() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App3;
