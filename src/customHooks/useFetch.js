import {  useReducer, useEffect} from "react";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "DATA_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "DATA_FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
      };
    case "SET_DEFAULT_STATE":
      return {
        data: "",
        isLoading: true,
      }
    default:
      throw new Error();
  }
}

function useFetch(fetchFunction, dependencyArrayItem) {
  const [value, dispatchValue] = useReducer(
    dataReducer,
    { data: "", isLoading: true }
  );

  useEffect(() => {
    const fetchStoriesID = async () => {
      try {
        const response = await fetchFunction(dependencyArrayItem);
        const result = await response.json();
  
        dispatchValue({ type: "DATA_FETCH_SUCCESS", payload: result });
      } catch (error) {
        alert(`${error.name}: ${error.message}`)
        dispatchValue({ type: "DATA_FETCH_FAILURE" });
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