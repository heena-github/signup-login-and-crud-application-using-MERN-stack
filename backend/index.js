const express = require('express')
const mongoose = require('mongoose');
const server = express()
const cors= require('cors')
const employeeRoutes=require('./Routes/employeeRoutes');
const authRoute = require('./Routes/authRoute')
const jwt = require('jsonwebtoken');
require('dotenv').config()
const path = require('path')
const fs= require('fs')
const publickey=fs.readFileSync(path.resolve(__dirname,'./public.key'),'utf-8')

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/company')
     console.log('database connected')
}

const auth = (req,res,next)=>{

    try{
        const token = req.get('Authorization').split('Bearer ')[1];
        console.log(token)
        const decoded = jwt.verify(token,publickey)
        console.log(decoded)
        if(decoded.email){
            next()
        }
        else{
            res.sendStatus(401)
        }
        
    }
    catch{
        res.sendStatus(401)
    }
   
}
server.use(cors())
server.use(express.json())
server.use('/auth',authRoute.router)
server.use('/',auth,employeeRoutes.router)

server.listen(8080,()=>{
    console.log('server started')
})