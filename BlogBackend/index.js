//server ko intilaize karne ke liye
const express = require('express');
const app = express();

//proccess.env sai saab utha liya
require("dotenv").config();
const PORT=process.env.PORT||3000;

//middleware =>parsing the data
app.use(express.json());

//import routes
const blogRoutes=require('./routes/blogs');

//mount/append/add routes =>server mai localhost:3000/api/v1/createTodo
app.use("/api/v1",blogRoutes);

//server ko listen karne ke liye
app.listen(PORT,()=>{
  console.log(`Server badiya chal rha hai at ${PORT}`);
})

//DB KO CONNECT KARNE KE LIYE
const dbConnect=require('./config/database');
dbConnect();


//default routes
app.get("/",(req,res)=>{
  res.send("Hello bhai saaab changa");
})

