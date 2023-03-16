const express = require("express");
const path = require("path")
const app= express()
const cookieparser = require('cookie-parser');

app.use(cookieparser());
app.set('views',path.join(__dirname,'views'))
app.get("/setcookies",(req,res)=>{
    res.cookie("name","kartik")
    .cookie("location","delhi")
    .cookie("language","english")
    .cookie("year","2002")
    .cookie("age","24")
    .send("cookie has created")
})


app.get("/seecookies",(req,res)=>{
    res.send(res.cookies)
})
app.listen(4800,()=>{
    console.log("server running");
})
