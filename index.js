const express =require('express');
const app =express();
const apidata=require("./Apidata.json")
const cors=require('cors');
app.use(cors());
const port=process.env.PORT || 2000;
app.get("/",(req,res)=>{
    res.send("Hello i am i api page");
});
app.get("/service",(req,res)=>{
    res.send(apidata);
});
app.listen(port,()=>{
    console.log("we are Online....");
});