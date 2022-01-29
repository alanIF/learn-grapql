const {gql, ApolloServer} = require ("apollo-server")


const resolvers ={
    Query:{
       idade(){
           return 20;
       }

    }
}
const typeDefs= gql`
    type Query{
        idade:Int
        nome:String
        isCasado:Boolean
        id:ID
    }
` 
// fim dos tipos de dados
const  server= new ApolloServer({
    typeDefs,
    resolvers
})

server.listen();