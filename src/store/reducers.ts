import { combineReducers } from "redux";

// Define the `cartReducer` function to update the state of the cart in response to actions
const cartReducer = (state = [], action : any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Add the product to the cart and return the updated state
      return [...state, action.product];
    case "REMOVE_FROM_CART":
      // Remove the product from the cart and return the updated state
      return state.filter((product : any) => product.id !== action.product.id);
    case "UPDATE_CART_PRODUCT_QUANTITY":
      // Update the quantity of the product in the cart and return the updated state
      return state.map((product : any) => {
        if (product.id === action.productId) {
          return {
            ...product,
            quantity: action.quantity,
          };
        }
        return product;
      });
    case "CREATE_ORDER":
      // Add the order to the cart and return the updated state
      return [...state, action.payload];
    default:
      // Return the current state if no action is specified
      return state;
  }
};

// Define the `favoritesReducer` function to update the state of the favorites in response to actions
const favoritesReducer = (state = [], action : any) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      // Add the product to the favorites and return the updated state
      return [...state, action.product];
    case "REMOVE_FROM_FAVORITES":
      // Remove the product from the favorites and return the updated state
      return state.filter((product : any) => product.id !== action.product.id);
    case "UPDATE_FAVORITES_PRODUCT_QUANTITY":
      // Update the quantity of the product in the favorites and return the updated state
      return state.map((product : any) => {
        if (product.id === action.productId) {
          return {
            ...product,
            quantity: action.quantity,
          };
        }
        return product;
      });
    default:
      // Return the current state if no action is specified
      return state;
  }
};

export default combineReducers({
  cart: cartReducer,
  favorites: favoritesReducer,
});
