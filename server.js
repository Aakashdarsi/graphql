import { ApolloServer} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';



import { typeDefs } from './typedefs.js';
import { MONGO_URL } from './config.js';


// mongodb+srv://aakashdarsi:<password>@cluster0.ffseort.mongodb.net/?retryWrites=true&w=majority

import mongoose from 'mongoose';

mongoose.connect(MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on("Connected",()=>{
    console.log("Connected to database")
})

mongoose.connection.on("error",(err)=>{
    console.log(err)
})

// Import Models 
import './Models/User.js'
import './Models/Quotes.js'


import { resolvers } from './Resolvers.js';
const server = new ApolloServer({
    typeDefs,
    resolvers
   
  });
  

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);





