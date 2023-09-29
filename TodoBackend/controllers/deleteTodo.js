const Todo = require('../models/Todo');


//route ko handle karne ke liye
exports.deleteTodo = async (request, res) => {
    try {
        const id = request.params.id;
        // const { tittle, description } = request.body;

        const response = await Todo.findByIdAndDelete(id);

        res.json({
            sucess: true,
            // data: response,
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
