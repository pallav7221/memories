import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"

import postRouter from "./routes/posts.js";

const app = express()

app.use("/post",postRouter)

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());



const CONNECTION_URl = "mongodb+srv://pallav7221:Pallav72218@cluster0.8zcc5of.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URl,{useNewUrlParser :true , useUnifiedTopology:true})
.then(()=>{
    app.listen(PORT,()=>console.log(`server running on ${PORT}`));
}).catch((error)=>console.log(error.message));

