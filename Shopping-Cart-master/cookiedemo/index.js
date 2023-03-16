const express = require("express");
const path = require("path")
const app= express()
const cookieparser = require('cookie-parser');

app.use(cookieparser("this is secret"));
app.set('views',path.join(__dirname,'views'))
app.get("/setcookies",(req,res)=>{
    res.cookie("name","kartik")
    .cookie("location","delhi")
    .cookie("language","english")
    .cookie("age","24")
    .send("cookie has created")
})
app.get("/login",(req,res)=>{
    const{login}=req.cookies;
    if(login==="true")
    return res.send("usre logged in")
    return res.redirect("/setcookies")
})

app.get("/seecookies",(req,res)=>{
    res.send(req.cookies)
})
app.listen(4800,()=>{
    console.log("server running");
})
