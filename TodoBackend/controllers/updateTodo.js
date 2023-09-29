const Todo = require('../models/Todo');


//route ko handle karne ke liye
exports.updateTodo = async (request, res) => {
    try {
        const id = request.params.id;
        const { tittle, description } = request.body;

        const response = await Todo.findByIdAndUpdate
            (
                { _id: id },
                { tittle, description, updatedAt: Date.now() },
            )

        res.status(200).json({
            sucess: true,
            data: response,
            message: "updated succesfully",
        });
    }

    
    catch (error) {
        console.log(error);
        console.error(error);

        res.status(500).json({
            sucess: false,
            data: "internal server error",
            message: error.message,
        })


    }
}





