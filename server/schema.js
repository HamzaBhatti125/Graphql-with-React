const { gql } = require("apollo-server");
const typeDefs = gql`
  #this is schema
  type MainCard {
    title: String! # ! means cannot be null
    image: String!
  }

  type Animal {
    id: ID!
    image: String!
    title: String!
    rating: Float
    price: String!
    description: [String!]!
    stock: Int!
    onSale: Boolean
    slug: String!
    category: Category
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    animals: [Animal!]!
  }

  type Query {
    mainCards: [MainCard]
    animals: [Animal!]!
    animal(slug: String!): Animal #we can define argument in () for queries like /animal/lion --> lion is slug
    categories: [Category!]!
    category(slug: String!): Category
  }

  type Mutation {
    addAnimal(
      image: String!
      title: String!
      rating: Float
      price: String!
      description: [String!]!
      stock: Int!
      onSale: Boolean
      slug: String!
      category: String!
    ): Animal
  }
`;

module.exports = typeDefs;
