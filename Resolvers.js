import { quotes,users } from './fakeDb.js';
import { randomBytes } from 'crypto';
export const resolvers = {

    Query:{
        grid:()=>"Hello World",
        users:()=>users,
        quotes:()=>quotes,
        user:(_,args)=>users.find(user=>user._id===args._id),
        iQuote:(_,args)=>quotes.filter(quote=>quote.by===args.by)
    
    },
    User:{
        quotes:(user)=>quotes.filter(quote=>quote.by===user._id)
    },
    Mutation:{
        createUserDummy:(_,newUser)=>{
            const _id = randomBytes(5).toString('hex');
            users.push({...newUser,_id});
            return users.find(user=>user._id===_id)
        }
       
    }
}