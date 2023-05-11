import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true,

},
email:{
    type:String,
    required:true,
},

password:{
    type:String,
    required:true
},
id:{
    type:mongoose.Schema.Types.ObjectId
}


})

mongoose.model("User",UserSchema)