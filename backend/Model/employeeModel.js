const mongoose = require('mongoose');
const {Schema}=mongoose

const addressSchema=new Schema({
    pincode:{type:Number,required:true},
    street:{type:String}
})

const employeeSchema = new Schema({
    firstName:{type:String,required:true,minLength:4,maxLength:16},
    lastName:{type:String,minLength:4,maxLength:16},
    age:{type:Number,min:[12,'age less then 12 are not allowed'],max:[100,'age cannot be more than 100']},
    email:{
        type:String,
        validate:{
            validator:function(v){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            message:props=>`${props.value} is not a valid email address`,
            required:[true,'User email address is required']
        }
    },
    address: addressSchema
})


exports.Employee=mongoose.model('Employee',employeeSchema)