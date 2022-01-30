const {ApolloServer} = require ("apollo-server")
const {typeDefs,resolvers} = require("./src/graphql")

// fim dos tipos de dados
const  server= new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();