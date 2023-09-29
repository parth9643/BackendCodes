//import mongoose
const mongoose = require('mongoose');

//routes handlers=>post,user
const likeSchema= new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    user:{
        type:string,
        required:true,
    }, 
});

//export the model
module.exports=mongoose.model("Like",likeSchema);