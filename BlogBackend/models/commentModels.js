//import mongoose
const mongoose = require('mongoose');

//routes handlers=>post,user,comment/body
const CommentSchema= new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    user:{
        type: String,
        required:true,
    },
    body:{
        type:String,
        required:true,
    }
});


//export the model
module.exports=mongoose.model("Comment",CommentSchema);