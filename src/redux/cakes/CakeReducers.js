import { BUY_CAKE } from "./types";

const initialState = {
  numberofcakes: 10
};

const CakeReducers = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numberofcakes - 1
      };
    default:
      return state;
  }
};

export default CakeReducers;
