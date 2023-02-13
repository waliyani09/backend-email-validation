const express = require('express')
require("./db");
const userRouter = require('./routes/user')

const app = express();
//Model view and controller (MVC)
//This is just a controller
app.use(express.json());
app.use('/api/user',userRouter);

app.post('/sign-in', (req,res,next)=> {
    const { email, password } = req.body;
    if(!email || !password) return res.json({error: "Email/password missing"});
    
    next();
} ,(req,res)=>{
    res.send("<h1>Hello World! This is a message from backend server in about section.</h1>");
});

app.listen(8000,()=>{
    console.log("The port is listening on port 8000");
});