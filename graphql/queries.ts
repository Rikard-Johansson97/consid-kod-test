import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
  query GetAllPosts {
    allPages {
      id
      title
    }
  }
`;

const GET_ALL_PRODUCTS = gql`
query allProducts {
  allProducts {
    name
    price
    id
    mainImage {
      url
      alt
    }
  }
}`

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

export {GET_ALL_POSTS, GET_ALL_PRODUCTS, GET_HOME_PAGE}