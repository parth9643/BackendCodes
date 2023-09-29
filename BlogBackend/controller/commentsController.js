const Post = require('../models/postModels');
const Comment = require('../models/commentModels');


//export the module
exports.createComment = async (req, res) => {
    try {
        //fetch the data from body
        const { post, user, body } = req.body;

        //comment creation 
        const comment = new Comment({
            post, user, body
        });

        //save the comment to db
        const saveComments = await comment.save();

        //find the post by id and then add new comment to the post
        const updatedPost = await Post.findByIdAndUpdate(post,
            {$push:{comments: saveComments._id}},
            {new:true}
        )
        populate("comments")
        .exec();


    res.status(201).json({
        post: updatedPost,
    })
    
    }
    catch(error){
       return res.status(500).json({
            message: "Internal Server Error",
            error:error,
        })
    }
}
