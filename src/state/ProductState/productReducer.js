import { actionTypes } from "./actionType";

export const initialState = {
  loading: false,
  error: false,
  products: [],
  cart: [],
  wish: [],
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionTypes.FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
        error: false,
      };

    case actionTypes.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case actionTypes.ADD_TO_WISH:
      return {
        ...state,
        wish: [...state.wish, action.payload],
      };

      
    case actionTypes.REMOVE_PRODUCT:
      const { product, removeFrom } = action.payload;

      if (removeFrom === "cart") {
        return {
          ...state,
          cart: [
            ...state.cart.filter(
              (innerProduct) => innerProduct._id !== product._id
            ),
          ],
        };
      } else if (removeFrom === "wishlist") {
        return {
          ...state,
          wishlist: [
            ...state.cart.filter(
              (innerProduct) => innerProduct._id !== product._id
            ),
          ],
        };
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};
