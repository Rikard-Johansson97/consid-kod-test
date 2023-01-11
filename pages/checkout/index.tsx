import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../src/components/Navbar/Navbar";
import Footer from "../../src/components/Footer/Footer";
import { useState, useEffect } from "react";
import KlarnaPage from "../../src/components/KlarnaPage/KlarnaPage";
import { Button } from "@mui/material";
import styles from "../../src/styles/checkout.module.scss";
import Link from "next/link";

const Checkout = () => {
  const cart = useSelector((state: any) => state.cart.items);
  const [response, setResponse] = useState<any>(null);

  const placeOrder = async (cart: any) => {
    const res = await fetch("/api/klarna", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });
    if (res.status !== 200) return;
    const data = await res.json();
    setResponse(data);
  };

  useEffect(() => {
    placeOrder(cart);
  }, [cart]);

  if (cart.length <= 0)
    return (
      <>
        <Navbar />
        <div className={styles.emptyCart}>
          <h2>Cart is Empty</h2>
          <Link href='/product'>
            <Button variant='outlined'>Go back to Product Page</Button>
          </Link>
        </div>{" "}
        <Footer />
      </>
    );
  if (!response) return <h2>LOADING...</h2>;

  return (
    <div>
      <Navbar />
      <KlarnaPage snippet={response.html_snippet} />
      <Footer />
    </div>
  );
};

export default Checkout;
