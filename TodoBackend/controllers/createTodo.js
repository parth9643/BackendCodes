//import Todo model
const { response } = require('express');
const Todo = require('../models/Todo');

//route ko handle karne ke liye
exports.createTodo = async (request, res) => {
    try {
        //extract the data from request.body
        const { tittle, description } = request.body;

        //create operation=>create a newTodoObject insert it into db
        const response = await Todo.create({
            tittle, description
        });

        //sucessflag response
        res.status(201).json({
            sucess: true,
            data: response,
            message: "data saved succesfully"
        }
        )
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

