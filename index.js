const {gql, ApolloServer} = require ("apollo-server")

const produtos = [{
    id:1,
    nome:"Mouse",
    descricao: "entrada"
},

{
    id:2,
    nome:"Teclado",
    descricao: "entrada"
},
{
    id:3,
    nome:"Monitor",
    descricao: "saida"
}
]
const usuarios =[{
        id:1,
        nome:"Alan",
        tecnologias:["JAVA", "PHP"]
    },
    {
        id:2,
        nome:"Wanessa",
        tecnologias:["JAVA", "PHP"]
    },
    {
        id:3,
        nome:"Luiz",
        tecnologias:["JAVA", "PHP"]
    }
]

const typeDefs= gql`
    type Usuario{
        nome:String
        id:ID
        tecnologias:[String]!   
    }
    type Produto{
        id:ID
        nome:String
        descricao:String
    }
    type Query{
        usuarios:[Usuario]
        produtos:[Produto]
        usuario(id: Int): Usuario
    }
`;

const resolvers ={
    Query:{
       usuarios(){
           return usuarios;
       }
    , 
       usuario(_, args){
            return usuarios.find((usuario) => usuario.id === args.id);
       },
       produtos(){
            return produtos;
       }
    }
};

// fim dos tipos de dados
const  server= new ApolloServer({
    typeDefs,
    resolvers
})

server.listen();