const Todo = require('../models/Todo');


//route ko handle karne ke liye
//>= get all todos
exports.getTodo = async (request, res) => {
    try {

        //fetch all items from db=>.find sai all memebers utha liya
        const response = await Todo.find({});

        //sucessflag response
        res.status(200).json({
            sucess: true,
            data: response,
            message: "whole todo is fetched succesfully"
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





//route ko handle karne ke liye
//=> get todo by id
exports.getTodoById = async (request, res) => {
    try {

        //get id
        const id = request.params.id;

        //fetch all items from db=>.find sai all memebers utha liya
        const response = await Todo.find({ _id: id });

        //data not found for given id
        if (!response) {
            return res.status(404).json({
                sucess: false,
                message: "No Data for this ID"
            });
        }

        //sucessflag response
        res.status(200).json({
            sucess: true,
            data: response,
            message: `Todo id ${id} data is fetched succesfully `
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

