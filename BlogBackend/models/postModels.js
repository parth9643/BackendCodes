//import mongoose
const mongoose = require('mongoose');


//routes handlers=>title,body
const postSchema= new mongoose.Schema({
    
    title:{
        type:String,
        required:true,
    },

    body:{
        type:String,
        required:true,
    },

    //multiple likes ka array
    like:[{
         type: mongoose.Schema.Types.ObjectId,
         ref: "Like",
    }],

    //multiple comments ka array
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]

});











//export the model
module.exports=mongoose.model("Post",postSchema);