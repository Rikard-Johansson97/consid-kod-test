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
export {GET_ALL_POSTS, GET_ALL_PRODUCTS, GET_HOME_PAGE};
