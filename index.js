// 1.importing express
const express =require("express");


// 2.initialising
const app = new express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//3.Api creation

app.get('/',(req,res)=>{
    res.json("Hello Welcome To Backend")
})
app.get('/view',(req,res)=>{
    res.json("Aswin")
})
app.post('/signup',(req,res)=>{
    res.send(req.body.Name)
})

//4.setting port
app.listen(3005,()=>{
    console.log("port 3005 is running");
})