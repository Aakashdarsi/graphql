import mongoose from "mongoose";


const QuoteSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    by:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }

})

mongoose.model("Quote",QuoteSchema)