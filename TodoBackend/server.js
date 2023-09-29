//server ko intilaize karne ke liye
const express = require('express');
const app = express();

//proccess.env sai saab utha liya
require("dotenv").config();
const PORT=process.env.PORT||3000;

//parsse the json data and add it req.body/Middleware
app.use(express.json());

//import todo routes
const todoRoutes=require('./routes/todo');

//mount/append/add routes =>server mai localhost:3000/api/v1/createTodo
app.use("/api/v1",todoRoutes);

//server ko listen karne ke liye
app.listen(PORT,()=>{
  console.log(`Server badiya chal rha hai at ${PORT}`);
})

//DB KO CONNECT KARNE KE LIYE
const dbConnect=require('./config/database');
dbConnect();


//default routes
app.get("/",(req,res)=>{
  res.send("Hello world");
})


//to show the dataa 
// app.get('/', (request, response) => {
//   response.send('Hello bhai.. kaise ho saab');
// })

// //data submition  
// app.post('/api/cars', (request, response) => {
//   const { name, brand } = request.body;;
//   console.log(name);
//   console.log(brand);
//   response.send('data submited');
// })

// const mongoose = require('mongoose');
// const mongoURI = 'mongodb://127.0.0.1:27017/cars';

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })


// .then(()=>{
//   console.log("connection is succesfull");
// })
// .catch((error)=>{
// console.log("recived an error of ", error);
// })
