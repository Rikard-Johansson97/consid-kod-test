import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

// Define the custom hook `useAddToFavorites`
const useAddToFavorites = () => {
  // Get the `dispatch` function from the Redux store
  const dispatch = useDispatch();
  // Get the state from the Redux store
  const state = useSelector((state: any) => state);

  // Define the `addToFavorites` function which will add a product to the favorites or update its quantity if it is already in the favorites
  const addToFavorites = (product: any, quantity: number) => {
    // Find the index of the product in the favorites
    const productIndex = state.favorites.findIndex((p: any) => p.id === product.id);
    if (productIndex === -1) {
      // Product not present in favorites, add it to the favorites
      dispatch({
        type: "ADD_TO_FAVORITES",
        product: { ...product, quantity: quantity },
      });
    } else {
      // Product already present in favorites, update its quantity
      dispatch({
        type: "UPDATE_FAVORITES_PRODUCT_QUANTITY",
        productId: product.id,
        quantity: state.favorites[productIndex].quantity + quantity,
      });
    }
  };

  // Return the `addToFavorites` function
  return addToFavorites;
};

export default useAddToFavorites;
