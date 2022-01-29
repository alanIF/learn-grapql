const {gql, ApolloServer} = require ("apollo-server")


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

