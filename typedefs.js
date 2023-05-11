export const typeDefs = `#graphql

type User{
id:ID!
firstName:String!
lastName:String!
email:String!
password:String!,
quotes:[Quotes!]
}


type Quotes{
name:String!,
by:String!
}

type Query {
    grid:String,
    users:[User!]!,
    quotes:[Quotes!]!,
    user(id:ID!):User!,
    iQuote(by:ID!):[Quotes!]

}

type Mutation{
    createUserDummy(firstName:String!,lastName:String!,email:String!,password:String!):User!,

}
`