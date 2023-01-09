import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../../src/components/Navbar/Navbar";
import Footer from "../../src/components/Footer/Footer";
import { useState, useEffect } from "react";
import KlarnaPage from "../../src/components/KlarnaPage/KlarnaPage";

const Checkout = () => {
  const cart = useSelector((state: any) => state.cart);
  const [response, setResponse] = useState<any>(null);

  const placeOrder = async (cart: any) => {
    const res = await fetch("/api/klarna", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });
    const data = await res.json();
    setResponse(data);
  };

  useEffect(() => {
    placeOrder(cart);
  }, [cart]);

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
