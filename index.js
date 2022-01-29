const {gql, ApolloServer} = require ("apollo-server")

//  inicio hello world
/*
const resolvers ={
    Query:{
        hello(){
            return 'World'
        }
    }
}
const typeDefs= gql`
    type Query{
        hello:String 
    }
` 
// fim hello world

*/
// inicio tipos de dados
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