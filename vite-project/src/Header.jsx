import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div style={{backgroundColor:"red",color:"white",display:"flex",justifyContent:"space-around"}}>
        <Link to="/">Login</Link>
        <Link to="/create" >Create</Link>
        <Link to="/read">Read</Link>
        <button onClick={()=>{localStorage.removeItem("user"),window.location.reload()}}>Logout</button>


    </div>
  )
}

export default Header