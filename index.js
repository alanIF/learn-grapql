const {gql, ApolloServer} = require ("apollo-server")


const db= [{
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
];
const perfis =[
    {id:1 , descricao:"ADM"},
    {id:2 , descricao: "Funcionario"}
];

const typeDefs= gql`
    type Perfil{
        id:Int
        descricao:String
    }
    type Usuario{
        id:Int
        nome:String
        email:String
        perfil:Perfil
    }
    type Mutation{
        criarUsuario(nome:String
        email:String):Usuario
        
    }
    type Query{
        usuario(id:Int): Usuario
        perfis: [Perfil]
    }
`;
function geradorId(lista){
    let novo;
    let ultimo = lista[lista.length -1];
    if(!ultimo){
        novo=0;
    }else{
        novo=ultimo.id;
    }
    return novo;
}
const resolvers ={
    
    Usuario:{
        perfil(usuario){
            console.log(usuario)
            return perfis.find((p) => p.id === usuario.perfil);
        }
    },
    Query:{
       usuario(_, args){
           return db.find((db)=> db.id ===args.id);
       },
       perfis(){
           return perfis;
       }
     
    },
    Mutation:{
        criarUsuario(_, args){

            const novoUsuario ={
                ... args,
                id:geradorId(db),
                perfil:2,
            };
            db.push(novoUsuario);
            return novoUsuario;
        }
    }
};

// fim dos tipos de dados
const  server= new ApolloServer({
    typeDefs,
    resolvers
})

server.listen();