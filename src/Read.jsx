import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Read = () => {
const [data,setData]=useState([])
const navigate  = useNavigate()
    const loadData= async () => {
        const result = await axios.get("http://localhost:3000/users");
        setData(result.data);
      };

      useEffect(()=>{
        loadData()
      },[])

      const edit=(id)=>{
        navigate(`/update/${id}`)
      }

      const deleted=async(id)=>{        
         await axios.delete(`http://localhost:3000/users/${id}`)
        loadData()
      }

      useEffect(()=>{
        if(!localStorage.getItem("user")){
           navigate("/")
        }

   },[])
   

      const ans=  data.map((key)=>{
        return(
            <tr>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.password}</td>
                <td><button onClick={()=>{edit(key.id)}}>Edit</button></td>
                <td><button onClick={()=>{deleted(key.id)}}>delete</button></td>
            </tr>
        )
      })
  return (
    <div>

           <table>
           <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Password</th>
             <th>Edit</th>
             <th>Delete</th>
           </tr>
           {ans}
           </table>

    </div>
  )
}

export default Read