import React from "react";
import KlarnaPage from "../../src/components/KlarnaPage/KlarnaPage";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Confirmation = () => {
  const router = useRouter();
  const { query } = router;
  const [response, setResponse] = useState<any>(null);
  const placeOrder = async (order_id: any) => {
    const res = await fetch(`/api/klarna?order_id=${order_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status !== 200) return;
    const data = await res.json();
    setResponse(data);
  };

  useEffect(() => {
    if (query.order_id) {
      placeOrder(query.order_id);
    }
  }, [query.order_id]);

  if (!response) return <h2>LOADING...</h2>;

  return <KlarnaPage snippet={response.html_snippet}></KlarnaPage>;
};

export default Confirmation;
