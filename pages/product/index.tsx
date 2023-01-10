import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import Card from "../../src/components/Card/Card";
import Navbar from "../../src/components/Navbar/Navbar";
import { GET_ALL_PRODUCTS } from "../../src/graphql/queries";
import Footer from "../../src/components/Footer/Footer";
import styles from "../../src/components/ProductPage/productPage.module.scss";

export default function Product() {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.productPage}>
      <Navbar></Navbar>
      <h2>Welcome to the Product page</h2>
      <div className={styles.cards}>
        {data.allProducts.map((product: any, i: any) => (
          <Card key={i} {...product} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
