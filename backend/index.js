const express = require('express')
const mongoose = require('mongoose');
const server = express()
const employeeRoutes=require('./Routes/employeeRoutes')

main().catch(err => console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/company')
     console.log('database connected')
}

server.use(express.json())
server.use('/employees',employeeRoutes.router)

server.listen(8080,()=>{
    console.log('server started')
})