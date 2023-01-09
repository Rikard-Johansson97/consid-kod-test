import { gql } from '@apollo/client';

// Define a GraphQL query to retrieve all posts
const GET_ALL_POSTS = gql`
  query GetAllPosts {
    allPages {
      title
      id
      slug
      mainImage {
        url
        title
        responsiveImage {
          width
          webpSrcSet
          title
          srcSet
          src
          sizes
          height
          bgColor
          base64
          aspectRatio
          alt
        }
      }
      content {
        blocks
        links
        value
      }
      _createdAt
    }
  }
`;

// Define a GraphQL query to retrieve all products
const GET_ALL_PRODUCTS = gql`
query allProducts {
  allProducts {
    _createdAt
    name
    price
    id
    mainImage {
      url
      alt
    }
  }
}`

// Define a GraphQL query to retrieve the home page
const GET_HOME_PAGE = gql`
query getHomePage {
  startpage {
    title
    id
    content {
      blocks
      links
      value
    }
    mainImage {
      url
      alt
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
      copyright
    }
  }
}
`

const RESPONSIVE_IMAGE = gql `
query getResponsiveImage {
  srcSet
  webpSrcSet
  sizes
  src
  width
  height
  aspectRatio
  alt
  title
  base64
}`;
export const GET_PRODUCT = gql `
query GetProduct ($id: ItemId!) {
  product (filter: {id: {eq: $id}}) {
    _createdAt
    id
    mainImage {
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
      id
      url
    }
    description {
      blocks
      links
      value
    }
    alternativeImages {
      width
      url
      responsiveImage {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        bgColor
        base64
        aspectRatio
        alt
      }
      id
      alt
    }
    price
    name
    updatedAt
  }
}`
// Export the defined queries
export {GET_ALL_POSTS, GET_ALL_PRODUCTS, GET_HOME_PAGE,RESPONSIVE_IMAGE};
