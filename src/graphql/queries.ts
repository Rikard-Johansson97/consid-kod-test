import { gql } from '@apollo/client';

// Define a GraphQL query to retrieve all posts
const GET_ALL_POSTS = gql`
  query GetAllPosts {
    allPages {
      title
      slug
      mainImage {
        url
      }
      id
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
    id
    mainImage {
      url
      alt
    }
    title
  }
}
`

// Export the defined queries
export {GET_ALL_POSTS, GET_ALL_PRODUCTS, GET_HOME_PAGE};
