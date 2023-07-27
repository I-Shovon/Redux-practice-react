import { useContext, useReducer } from "react";
import { createContext, useEffect} from "react";
import {
  initialState,
  productReducer,
} from "../state/ProductState/productReducer";
import { actionTypes } from "../state/ProductState/actionType";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  console.log(state);

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
      );
  }, []);

  const value = {
    state,
  };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(PRODUCT_CONTEXT);

  return context;
};

export default ProductProvider;
