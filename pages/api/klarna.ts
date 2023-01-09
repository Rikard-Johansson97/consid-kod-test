import { NextApiRequest, NextApiResponse } from "next";

const getKlarnaAuth = () => {
  const username = process.env.NEXT_PUBLIC_PUBLIC_KEY;
  const password = process.env.NEXT_PUBLIC_SECRET_KEY;

  const auth =
    "Basic " + Buffer.from(username + ":" + password).toString("base64");

  return auth;
};

function formatAsOrderLines(currentCart : any) {
	currentCart.forEach((item : any) => {
		item.total_amount = item.quantity * item.unit_price;
		item.total_tax_amount = item.total_amount - (item.total_amount * 10000) / (10000 + item.tax_rate);
	});
	return currentCart;
}

function formatProduct(product : any) {
  console.log(product)
	return {
		type: 'physical', // same
		reference: product.id,
		name: product.name,
		quantity: product.quantity,
		quantity_unit: 'pcs', // same
		unit_price: parseInt(product.price) * 100,
		tax_rate: 2500, // same
		total_discount_amount: 0, // same
		image_url: product.mainImage.url
	};
}

const createOrder = async (req : any,res : any) => {
  
  
  if (req.method !== "POST") return res.status(404); 
  const cart = req.body.cart;
  
	const formattedProduct = cart.map(formatProduct);
	const order_lines = formatAsOrderLines(formattedProduct);

	let order_amount = 0;
	let order_tax_amount = 0;

	order_lines.forEach((item : any) => {
		order_amount += item.total_amount;
		order_tax_amount += item.total_tax_amount;
	});

  const auth = getKlarnaAuth();
  const url = "https://api.playground.klarna.com/checkout/v3/orders/";

  const headers = {
    Authorization: auth,
    "content-type": "application/json",
  };
  const payload = {
    purchase_country: "SE",
    purchase_currency: "SEK",
    locale: "sv-SE",
    order_amount: order_amount,
    order_tax_amount: order_tax_amount,
    order_lines,
    merchant_urls: {
      terms: "https://www.example.com/terms.html",
      checkout: "https://www.example.com/checkout.html",
      confirmation: `${process.env.NEXT_PUBLIC_REDIRECT_URL}/checkout//confirmation?order_id={checkout.order.id}`,
      push: "https://www.example.com/api/push",
    },
  };

  const body = JSON.stringify(payload);
  const response = await fetch(url, {
    body,
    headers,
    method: "POST",
  });
  const data = await response.json();

  res.status(200).json(data);
}

const retrieveOrder = async (req: any, res: any, order_id: any) => {
  try {
    console.log();
    const auth = getKlarnaAuth();
    const url = `https://api.playground.klarna.com/checkout/v3/orders/${order_id}`;

    const headers = {
      Authorization: auth,
    };

    const response = await fetch(url, { headers });

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  switch (req.method) {
    case "POST":
      await createOrder(req, res);
      break;
    case "GET":
      console.log(req.query)
      await retrieveOrder(req , res, req.query.order_id);
      break;  
    default:
      break;
  }
}

