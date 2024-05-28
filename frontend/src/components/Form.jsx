import React, { useState } from 'react'

const Form = () => {
    const [formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        age:'',
        address:{
          pincode:'',
          street:''
        }
    })
    const [error,setError]=useState('')
   
  
    const handleSubmit = async()=>{
       const response = await fetch('http://localhost:8080',{
        method:'POST',
        body:JSON.stringify(formData),
        headers:{
            'Content-Type':'application/json'
        }
       })

       const result=await response.json()
       if(!response.ok){
        setError(result.error)
       }
       else{
        console.log(result)
        setFormData({
            firstName:'',
            lastName:'',
            email:'',
            age:'',
            address:{
              pincode:'',
              street:''
            }
        })
       }
    // console.log(formData)
    
    }

    const handleChange = (e) =>{
        const{name,value} = e.target
        setFormData({
            ...formData,
            [name]:value,
    
        }
        )   
    }

    const handleChangeAddress = (e)=>{
        const{name,value} = e.target
        setFormData({
            ...formData,
            address:{
                ...formData.address,
                [name]:value
            }
           
        })
    }

  return (
    <>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">First Name</label>
  <input type="text" name="firstName" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="John"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Last Name</label>
  <input type="text" name="lastName" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="Doe"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Age</label>
  <input type="number" name="age" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="22"/>
</div>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" name="email" onChange={handleChange} className="form-control" id="exampleFormControlInput1" placeholder="xyz@gmail.com"/>
</div>

<div className="mb-3">
<label for="exampleFormControlInput1" className="form-label">Address</label>
  <label for="exampleFormControlInput1" className="form-label">Pincode</label>
  <input type="number" name="pincode" onChange={handleChangeAddress} className="form-control" id="exampleFormControlInput1" placeholder="400613"/>

  <label for="exampleFormControlInput1" className="form-label">Street</label>
  <input type="text" name="street" onChange={handleChangeAddress}className="form-control" id="exampleFormControlInput1" placeholder="street name"/>
</div>

<button type="button" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
</>
  )
}

export default Form