const model=require('../Model/employeeModel')
const Employee=model.Employee
const jwt = require('jsonwebtoken');
require('dotenv').config()
const path = require('path')
const fs= require('fs')
const privatekey=fs.readFileSync(path.resolve(__dirname,'../private.key'),'utf-8')
const bcrypt = require('bcrypt')


exports.createEmployee = async (req,res)=>{
    const newEmployee=new Employee(req.body)
    // let token = jwt.sign({ email: req.body.email },process.env.SECRET_KEY );
    let token = jwt.sign({email:req.body.email},privatekey,{algorithm:'RS256'})
    const hash = bcrypt.hashSync(req.body.password,5 );
    newEmployee.token=token;
    newEmployee.password=hash
    newEmployee.save()
    .then((doc)=>{
    console.log(doc)
    res.status(201).json({token})
    })
    .catch((err)=>{
    console.log(err)
    res.status(400).json(err.message)
    })
    }

    exports.login=async(req,res)=>{
        try{
            const employee=await Employee.findOne({email:req.body.email})
            const isAuth = bcrypt.compareSync(req.body.password,employee.password );
            if(isAuth){
                let token = jwt.sign({email:req.body.email},privatekey,{algorithm:'RS256'})
                employee.token=token
                employee.save()
                res.json({token})
            }
            else{
                res.sendStatus(401)
            }
        }
        catch(err){
          res.status(401).json(err)
        }
    
    }

    