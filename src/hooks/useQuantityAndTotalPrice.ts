import { useState } from 'react';
import { useDispatch } from "react-redux";

// Define the custom hook `useQuantityAndTotalPrice`
const useQuantityAndTotalPrice = (product: any, initialQuantity: number, price: number) => {
  // Use the `useState` hook to store the quantity and total price
  const [quantity, setQuantity] = useState(initialQuantity);
  const [totalPrice, setTotalPrice] = useState(initialQuantity * price);
  // Get the `dispatch` function from the Redux store
  const dispatch = useDispatch();

  // Define the `increment` function to increase the quantity by 1 and update the total price
  const increment = () => {
    setQuantity(quantity + 1);
    setTotalPrice(totalPrice + price);
    // Dispatch action to update the quantity in the Redux store
    dispatch({
      type: "UPDATE_CART_PRODUCT_QUANTITY",
      productId: product.id,
      quantity: quantity + 1
    });
  };

  // Define the `decrement` function to decrease the quantity by 1 and update the total price
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(totalPrice - price);
      // Dispatch action to update the quantity in the Redux store
      dispatch({
        type: "UPDATE_CART_PRODUCT_QUANTITY",
        productId: product.id,
        quantity: quantity - 1
      });
    }
  };

  // Return the quantity, total price, and the `increment` and `decrement` functions
  return { quantity, totalPrice, increment, decrement };
};

export default useQuantityAndTotalPrice;
