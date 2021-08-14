import {  useReducer, useEffect} from "react";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        errorMessage: ""
      };
    case "DATA_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };
    case "SET_DEFAULT_STATE":
      return {
        data: [],
        isLoading: true,
        errorMessage: ""
      }
    default:
      throw new Error();
  }
}

function useFetch(fetchFunction, dependencyArrayItem) {
  const [value, dispatchValue] = useReducer(
    dataReducer,
    { data: [], isLoading: true, errorMessage: "" }
  );

  useEffect(() => {
    const fetchStoriesID = async () => {
      try {
        const response = await fetchFunction(dependencyArrayItem);
        const result = await response.json();

        // throw new Error("Something Went Wrong!");
        
        dispatchValue({ type: "DATA_FETCH_SUCCESS", payload: result });
      } catch (error) {
        dispatchValue({ type: "DATA_FETCH_FAILURE", payload: `${error.message}` });
      }
    }

    fetchStoriesID();

    return () => {
      dispatchValue({ type: "SET_DEFAULT_STATE" });
    };
  }, [fetchFunction, dependencyArrayItem]);

  return [value];
}

export default useFetch;