import { useRouter } from "next/router";
import Navbar from "../../src/components/Navbar/Navbar";
import { useQuery, gql } from "@apollo/client";
import ProductPage from "../../src/components/ProductPage/SingleProduct/Product";
import Footer from "../../src/components/Footer/Footer";

const Product = () => {
  const router = useRouter();
  const id = router.query.productId;

  const GET_PRODUCT = gql`
  query GetProduct {
    product(filter: {id: {eq: ${id}}}) {
      price
      name
      mainImage {
        alt
        url
      }
      id
      alternativeImages {
        url
        alt
      }
    }
  }
`;

  const { loading, error, data } = useQuery(GET_PRODUCT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar></Navbar>
      <ProductPage {...data}>
        <h1>{data.product.name}</h1>
        <p>{data.product.price}</p>
      </ProductPage>
      <Footer />
    </div>
  );
};

export default Product;
