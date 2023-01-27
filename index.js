const express=require("express");
const app=express();
const mongoose=require("mongoose");
const connection =require("./config/config");
const todoRoute=require('./routes/todo')
const registerRoute=require('./routes/auth');
const dotenv=require('dotenv');

app.use(express.json());


dotenv.config();
connection();
console.log(process.env.MONGO_URI);
mongoose.set('strictQuery', false);
// mongoose.connect(process.env.MONGO_URL)
// .then(console.log('Connected to MongoDb'))
// .catch((error)=>console.log(error))
app.use('/todo',todoRoute)
app.use('/todo',registerRoute)
let port=process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Backend is running on port${port}`);
})