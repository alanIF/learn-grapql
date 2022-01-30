# learn-grapql
Aprendizados de GraphQL

# Ferramentas
- Apolo Server
- Node js

# Passo a passo
    1- npm init -y gerar packjson
    2-  npm i -D nodemon
    3- npm i graphql apollo-server

# Type dados scalar types
    - int
    -float
    -string
    -boolean
    -ID
# Tipo de consulta referenciada
query ExampleQuery {
    consulta1: usuario(id:2) {
      nome
      perfil {
        descricao
      }
    consulta2: usuario(id:1) {
      nome
      perfil {
        descricao
      }
}}
# Fragment
query ExampleQuery {
  listUsuarios {
     ... user
  }  
}

fragment user on Usuario{
  id
  nome
  email
  perfil {
    descricao
  }
}