const express = require("express");
const path = require("path")
const app= express()
const cookieparser = require('cookie-parser');

app.use(cookieparser("this is secret"));
app.set('views',path.join(__dirname,'views'))
app.get("/setcookies",(req,res)=>{
    res.cookie("name","kartik",{maxAge: 7*24*60*60*1000,httpOnly:true})
    .cookie("location","delhi",{maxAge: 7*24*60*60*1000,httpOnly:true})
    .cookie("language","english",{maxAge: 7*24*60*60*1000,httpOnly:true})
    .cookie("age","24",{maxAge: 7*24*60*60*1000,signed:true})
    .cookie("login","true")
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