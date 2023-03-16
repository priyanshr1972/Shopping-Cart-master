const express=require("express")
const app=express();
const path=require("path");
const cookieparser = require('cookie-parser');
const session=require('express-session')

app.set("view engine","ejs");
app.set('views',path.join(__dirname,'views'))
app.use(cookieparser(" this is secret session"))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}))

app.get('/user',(req,res)=>{
    const{username}=req.query;//user?username=lokesh
    req.session.username=username;
    res.redirect('/greet');
    

})

app.get('/greet',(req,res)=>{
    const{username}=req.session;
    res.send(`welcome ${username}`);

})

app.get('/session',(req,res)=>{
    res.send('session created')
})


app.listen(4000,()=>{
    console.log("running on 4000")
})

