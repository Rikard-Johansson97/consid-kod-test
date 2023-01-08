import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

// Define the custom hook `useAddToCart`
const useAddToCart = () => {
  // Get the `dispatch` function from the Redux store
  const dispatch = useDispatch();
  // Get the state from the Redux store
  const state = useSelector((state: any) => state);

  // Define the `addToCart` function which will add a product to the cart or update its quantity if it is already in the cart
  const addToCart = (product: any, quantity: number) => {
    // Find the index of the product in the cart
    const productIndex = state.cart.findIndex((p: any) => p.id === product.id);
    if (productIndex === -1) {
      // Product not present in cart, add it to the cart
      dispatch({
        type: "ADD_TO_CART",
        product: { ...product, quantity: quantity },
      });
    } else {
      // Product already present in cart, update its quantity
      dispatch({
        type: "UPDATE_CART_PRODUCT_QUANTITY",
        productId: product.id,
        quantity: state.cart[productIndex].quantity + quantity,
      });
    }
  };
  
  // Return the `addToCart` function
  return addToCart;
};

export default useAddToCart;
