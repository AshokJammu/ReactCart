import React from 'react'
import {Link} from 'react-router-dom'
const Navbar =()=>{
    return(
        <div style={{display:"flex"}}>
            <Link to ='/' style={{padding:20}}>Home</Link>
            <Link to ='/cart' style={{padding:20}}>Cart</Link>
            <Link to ='/login' style={{padding:20}}>Login</Link>

        </div>
    )
}

export default Navbar