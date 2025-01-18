import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Create = () => {
   const [input,setInput]=useState({})
  const navigate=useNavigate()
   const handleInput=(e)=>{
    setInput({...input,[e.target.name]:e.target.value})
   }
   const add=async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:3000/users",input)
   }

   useEffect(()=>{
    if(!localStorage.getItem("user")){
       navigate("/")
    }

},[])

    
  return (
    <div>


       <form action="" style={{display:"flex",flexDirection:"column",width:"300px"}} >

       Name:    <input type="text" name='name' value={input.name} onChange={handleInput}/>
       Email    <input type="text" name="email" value={input.email} onChange={handleInput}/>
       Password <input type="text" name='password' value={input.password} onChange={handleInput}/>
       <button onClick={add}>Submit</button>
       </form>





    </div>
  )
}

export default Create