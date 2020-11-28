const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    gengre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {},
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {},
    },
  }),
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {},
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {},
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {},
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {},
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: Query,
});
