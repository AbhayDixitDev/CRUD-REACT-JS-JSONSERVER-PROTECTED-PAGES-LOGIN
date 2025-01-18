import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
const Update = () => {
const [data,setData]=useState({})
const {id}=useParams()
const navigate  = useNavigate()
    const loadData= async () => {
        const result = await axios.get("http://localhost:3000/users/"+id);
        setData(result.data);
      };

      useEffect(()=>{
        loadData()
      },[])

      const updateData=async(e)=>{
        e.preventDefault()
        await axios.put("http://localhost:3000/users/"+id,data)
        navigate("/read")
    }

    useEffect(()=>{
        if(!localStorage.getItem("user")){
           navigate("/")
        }

   },[])
   

      
       
  return (
    <div>

           <form  style={{display:"flex",flexDirection:"column",width:"300px"}}>

           Name:    <input type="text" name='name' value={data.name} onChange={(e)=>{setData({...data,name:e.target.value})}}/>
           Email    <input type="text" name="email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
           Password <input type="text" name='password' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}/>
           <button onClick={updateData}>Update</button>
           </form>

    </div>
  )
}

export default Update