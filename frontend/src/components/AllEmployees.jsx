import React, { useEffect, useState } from 'react'

const AllEmployees = () => {

 const[employees,setEmployees] = useState()
 const [error,setError]=useState('')

 const getEmployees= async()=>{
  const response = await fetch('http://localhost:8080')
  const result=await response.json()
  if(!response.ok){
   setError(result.error)
  }
  else{
    setEmployees(result)
    console.log(employees)
  }
 }

 useEffect(()=>{
  getEmployees()
  
 },[])
    return (
    <div>

    {
        employees?.map((emp)=>{
        return  (  
        <div className="card" style={{width:' 18rem'}} key={emp._id}>
  <div className="card-body">
    <h5 className="card-title">{emp.firstName} {emp.lastName}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{emp.email}</h6>
    <h6 className="card-subtitle mb-2 text-body-secondary">{emp.age}</h6>
    <b>Address: </b>
    <p className="card-text"><b>Pincode: </b>{emp.address.pincode} <b>street:</b>{emp.address.street}</p>
    <a href="#" className="card-link">Edit</a>
    <a href="#" className="card-link">Delete</a>
  </div>
</div>
)
    })
    }
      
    </div>
  )
}

export default AllEmployees