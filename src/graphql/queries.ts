import { gql } from '@apollo/client';

// Define a GraphQL query to retrieve all posts
const GET_PAGE_CONTENT = gql`
    query GET_PAGE_CONTENT ($slug: String!) {
      page(filter: {slug: {eq: $slug}}) {
        id
        title
        slug
        content {
          value
          links
          blocks
        }
        mainImage {
          responsiveImage {
            alt
            base64
            bgColor
            title
            webpSrcSet
            srcSet
            src
            sizes
            height
            width
            aspectRatio
          }
        }
      }
      }
`;

// Define a GraphQL query to retrieve all products
const GET_ALL_PRODUCTS = gql`
query allProducts {
  allProducts {
    updatedAt
    price
    name
    id
    _createdAt
    alternativeImages {
      responsiveImage {
        alt
        base64
        bgColor
        title
        aspectRatio
        height
        sizes
        src
        srcSet
        webpSrcSet
        width
      }
    }
    description {
      value
    }
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
    }
  }
}`

const GET_FEATURED_PRODUCT_IDS = gql`
query allProducts {
  allProducts(first: 3) {
    id
  }
}`

// Define a GraphQL query to retrieve the home page
const GET_HOME_PAGE = gql`
query getHomePage {
  startpage {
    title
    id
    content {
      value
    }
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
    }
  }
}
`
export const GET_PRODUCT = gql `
query GetProduct ($id: ItemId!) {
  product(filter: {id: {eq: $id}}) {
    updatedAt
    price
    name
    id
    description {
      value
    }
    alternativeImages {
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
    description {
      value
    }
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
    }
    _createdAt
  }
}
`
// Export the defined queries
export {GET_PAGE_CONTENT, GET_ALL_PRODUCTS, GET_HOME_PAGE, GET_FEATURED_PRODUCT_IDS};

