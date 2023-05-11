export const typeDefs = `#graphql

type User{
_id:ID!
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
    user(_id:ID!):User!,
    iQuote(by:ID!):[Quotes!]

}

type Mutation{
    createUserDummy(newUser:userInput!):User!,

}

input userInput{
firstName:String!,
lastName:String!,
email:String!,
password:String!

}

`