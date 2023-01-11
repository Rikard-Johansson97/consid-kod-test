import { useDispatch } from "react-redux";

// Define the custom hook `useRemoveFromFavorites`
const useRemoveFromFavorites = () => {
  // Get the `dispatch` function from the Redux store
  const dispatch = useDispatch();

  // Define the `removeFromFavorites` function which will remove a product from the favorites
  const removeFromFavorites = (product: any) => {
    // Dispatch the action to remove the product from the favorites
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      product: product,
    });
  };

  // Return the `removeFromFavorites` function
  return removeFromFavorites;
};

export default useRemoveFromFavorites;
