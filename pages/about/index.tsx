/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../src/graphql/queries";
import Navbar from "../../src/components/Navbar/Navbar";
import Banner from "../../src/components/Banner/Banner";
import CardWrapper from "../../src/components/CardWrapper/CardWrapper";
const About = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data.allPages[0]);

  return (
    <div>
      <Navbar />
      <Banner data={data.allPages[0]} />
      <CardWrapper>
        <div className='about'>
          <h1>About Consid</h1>
          <p>
            Consid is a leading e-commerce company that provides a wide range of
            products to customers around the world. Our mission is to make
            shopping easy and convenient for everyone, by offering a wide
            selection of products at competitive prices, and delivering them
            quickly and reliably.
          </p>
          <h2>Our Website</h2>
          <p>
            Our website, Consid.com, is designed to be user-friendly and easy to
            navigate. We offer a wide range of products in categories such as
            electronics, home goods, fashion, and more. Customers can easily
            search for products, add them to their cart, and checkout securely.
            We also offer fast and reliable shipping options to ensure that our
            customers receive their orders as quickly as possible.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>Customer satisfaction is our top priority</li>
            <li>
              We strive to offer the best prices and value to our customers
            </li>
            <li>We are committed to providing high-quality products</li>
            <li>We believe in ethical and sustainable business practices</li>
          </ul>
        </div>
      </CardWrapper>
    </div>
  );
};

export default About;
