import { quotes,users } from './fakeDb.js';
import { randomBytes } from 'crypto';
export const resolvers = {

    Query:{
        grid:()=>"Hello World",
        users:()=>users,
        quotes:()=>quotes,
        user:(_,args)=>users.find(user=>user.id===args.id),
        iQuote:(_,args)=>quotes.filter(quote=>quote.by===args.by)
    
    },
    User:{
        quotes:(user)=>quotes.filter(quote=>quote.by===user.id)
    },
    Mutation:{
        createUserDummy:(_,args)=>{
            const id = randomBytes(5).toString('hex');
            users.push({...args,id});
            return users.find(user=>user.id===id)
        }
       
    }
}