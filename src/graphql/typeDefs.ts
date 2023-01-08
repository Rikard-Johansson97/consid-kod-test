const typeDefs = `
type Product {
    id: ID!
    name: String!
    price: Float!
    quantity: Int!
    mainImage: File!
  }
  
  type Order {
    id: ID!
    products: [Product!]!
    totalPrice: Float!
    createdAt: DateTime!
  }
  
  type Query {
    products: [Product!]!
    orders: [Order!]!
  }
  
  type Mutation {
    createOrder(products: [ProductInput!]!): Order!
    updateOrder(id: ID!, products: [ProductInput!]!): Order
  }
  
  input ProductInput {
    id: ID!
    quantity: Int!
  }
`;

export default typeDefs;
