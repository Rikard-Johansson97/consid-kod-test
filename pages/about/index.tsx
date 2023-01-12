/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PAGE_CONTENT } from "../../src/graphql/queries";
import Navbar from "../../src/components/Navbar/Navbar";
import Banner from "../../src/components/Banner/Banner";
import CardWrapper from "../../src/components/CardWrapper/CardWrapper";
import { StructuredText } from "react-datocms";
const About = () => {
  const { loading, error, data } = useQuery(GET_PAGE_CONTENT, {
    variables: { slug: "about" },
  });
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Navbar />
      <Banner {...data.page} />
      <CardWrapper>
        <h2>About Consid</h2>
        <StructuredText data={data.page.content} />
      </CardWrapper>
    </div>
  );
};

export default About;
