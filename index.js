const {gql, ApolloServer} = require ("apollo-server")


const db = {
    usuarios : [{
        id:1,
        nome:"Alan",
        email:"alan_tj@hotmail.com.br",
        perfil:2
  },
    {
        id:2,
        nome:"Wanessa",
        email:"alan_tj@hotmail.com.br",
        perfil:1

    },
    {
        id:3,
        nome:"Luiz",
        email:"alan_tj@hotmail.com.br",
        perfil:2

    }
],
    perfis :[
        {id:1 , descricao:"ADM"},
        {id:2 , descricao: "Funcionario"}
    ]
};
   

const typeDefs= gql`
    enum TipoPerfil{
        ADM
        Funcionario
        Cliente
    }
    type Perfil{
        id:Int
        descricao:TipoPerfil
    }
    type Usuario{
        id:Int
        nome:String
        email:String
        perfil:Perfil
    }
   
    type Query{
        usuario(id:Int): Usuario
        perfis: [Perfil]
        listUsuarios:[Usuario]
    }
`;

const resolvers ={
    Usuario:{
        perfil(usuario){
            console.log(usuario)
            return db.perfis.find((p) => p.id === usuario.perfil);
        }
    },
    Query:{
       usuario(_, args){
           return db.usuarios.find((db)=> db.id ===args.id);
       },
       perfis(){
           return db.perfis;
       },
       listUsuarios(){
           return db.usuarios;
       }

    },
};

// fim dos tipos de dados
const  server= new ApolloServer({
    typeDefs,
    resolvers
})

server.listen();