import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../src/components/Navbar/Navbar";
import Footer from "../../src/components/Footer/Footer";
import MenuItem from "../../src/components/DropMenu/MenuItem/MenuItem";
import CardWrapper from "../../src/components/CardWrapper/CardWrapper";
import styles from "./checkout.module.scss";
import Button from "@mui/material/Button";
const Checkout = () => {
  const cart = useSelector((state: any) => state.cart);
  console.log(cart);

  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "80px" }}>
        <CardWrapper>
          <h2>Checkout</h2>
          <div className={styles.checkout}>
            {cart.map((product: any, index: any) => (
              <MenuItem key={index} {...product} />
            ))}
          </div>
          <Button size='large'>Place Order</Button>
        </CardWrapper>
        <Footer />
      </div>
    </div>
  );
};

export default Checkout;
