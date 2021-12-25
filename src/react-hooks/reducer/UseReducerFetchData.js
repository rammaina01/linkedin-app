import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialPost = {
  loading: true,
  post: {},
  error: "",
};

const reduce = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS": {
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    }
    case "FETCH_ERROR": {
      return {
        loading: false,
        post: {},
        error: "Something Went Worng!",
      };
    }
    default:
      return state;
  }
};
function UseReducerFetchData() {
  const [state, dispatch] = useReducer(reduce, initialPost);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default UseReducerFetchData;
