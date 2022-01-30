const  db= require('../../../db')
module.exports ={
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
       
        listUsuarios(){
            return db.usuarios;
        }
    }
};