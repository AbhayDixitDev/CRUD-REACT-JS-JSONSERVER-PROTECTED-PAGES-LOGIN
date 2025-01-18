import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Login = () => {
    const [data,setData]=useState({})
    const loginUser=async(e)=>{
        e.preventDefault()
        const result = await axios.get("http://localhost:3000/users");
        console.log(result);
        
       const ans= result.data.filter((key)=>key.email===data.email && key.password===data.password)
       console.log(ans);
       
       if(ans.length>0){
        alert("Login Success")
        localStorage.setItem("user",JSON.stringify(ans[0]))

    }
}
    const navigate  = useNavigate()

    useEffect(()=>{
         if(localStorage.getItem("user")){
            navigate("/read")
         }

    },[])
    
  return (
    <div>

        <form style={{display:"flex",flexDirection:"column",width:"300px"}}>

        <input type="text" placeholder='Email' value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} />
        <input type="text" placeholder='Password' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} />
        <button onClick={loginUser}>Submit</button>
        </form>


    </div>
  )
}

export default Login