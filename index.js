const http = require('http');
const fs= require('fs');
// require("./src/db/conn");
// const Register =require("./src/models/registers");



// const url= require('url')
var express=require("express");
// var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var app=express();

const hostname = '127.0.0.1';
const port = 3000;
const home =fs.readFileSync('index.html');
const about =fs.readFileSync('about.html');
const menu =fs.readFileSync('menu.html');
const contact =fs.readFileSync('contact.html');
const submission=fs.readFileSync('about.html');
app.use(express.json());
app.use(express.urlencoded({extended:false}));


const server = http.createServer((req, res) => {
  console.log(req.url);
  url= req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url=='/'){

    res.end(home);
  }
   else if(url=='/about'){
     
    res.end(about);
  }
   else if(url=='/menu'){

    res.end(menu);
  }
   else if(url=='/contact'){

    res.end(contact);
  }
  else if(url=='/submission'){
    res.end(submission);
  }
  else{
    res.statusCode = 404;
    res.end("<h1> 404 not found </h1>")
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
app.post('/about',function(req,res){
  
  return res.redirect('/about');
});
// app.post('/about',async(req,res)=>{
// var email=req.body.name;
// var password=req.body.password;
// var data={
//   "email": email,
//   "password": password,
// }
// db.collection('users').insertOne(data,(err,collection)=>{
//   if(err){
//     throw err;
//   }
//   console.log("recorded");
// })
// return res.redirect('about.html')
// });
