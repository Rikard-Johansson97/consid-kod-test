/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../src/graphql/queries";
import Navbar from "../../src/components/Navbar/Navbar";
import Banner from "../../src/components/Banner/Banner";
const Contact = () => {
  const { loading, error, data } = useQuery(GET_ALL_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <Banner data={data.allPages[1]} />
    </div>
  );
};

export default Contact;
