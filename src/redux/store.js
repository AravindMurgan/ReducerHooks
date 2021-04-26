import { createStore } from "redux";
import CakeReducers from "./cakes/CakeReducers";

const store = createStore(CakeReducers);

export default store;
