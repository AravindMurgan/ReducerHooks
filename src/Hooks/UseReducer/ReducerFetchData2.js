import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: ""
      };

    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
        post: [],
        error: "Something went wrong"
      };

    default:
      return state;
  }
};

function ReducerFetchData2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("httpds://jsonplaceholder.typicode.com/posts/1")
      .then((res) => dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "FETCH_FAILURE" }));
  }, []);

  return (
    <div>
      UseReducer with Hook
      {state.loading ? "Loading... " : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default ReducerFetchData2;
