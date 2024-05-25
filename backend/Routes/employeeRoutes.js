const express = require('express')
const router=express.Router()
const employeeController = require('../controller/employeeController')

router
.post('/',employeeController.createEmployee)
.get('/',employeeController.allEmployees)
.get('/:id',employeeController.singleEmployee)
.put('/:id',employeeController.replaceEmployee)
.patch('/:id',employeeController.updateEmployee)
.delete('/:id',employeeController.deleteEmployee)
exports.router=router;