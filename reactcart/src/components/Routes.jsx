import React from 'react'
import {Route} from 'react-router-dom'

import Home from './Home'
import Cart from './Cart'
import Login from './Login'
const  Routes =()=>{
    return(
        <div style={{display:"flex"}}>
            <Route path="/" exact render ={()=><Home/>} />
            <Route path="/cart"  render ={()=><Cart/>} />
            <Route path="/login"   render ={()=><Login/>} />

        </div>
    )
}

export default  Routes