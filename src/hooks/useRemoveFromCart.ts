import { useDispatch } from "react-redux";

// Define the custom hook `useRemoveFromCart`
const useRemoveFromCart = () => {
  // Get the `dispatch` function from the Redux store
  const dispatch = useDispatch();

  // Define the `removeFromCart` function which will remove a product from the cart or favorites
  const removeFromCart = (product: any, source: string) => {
    if (source === "cart") {
      // Remove the product from the cart
      dispatch({
        type: "REMOVE_FROM_CART",
        product,
      });
    } else if (source === "favorites") {
      // Remove the product from the favorites
      dispatch({
        type: "REMOVE_FROM_FAVORITES",
        product,
      });
    }
  };

  // Return the `removeFromCart` function
  return removeFromCart;
};

export default useRemoveFromCart;
