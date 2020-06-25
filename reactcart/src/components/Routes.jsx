import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Login from './Login'

const  Routes =(props)=>{

    const { app } = props
 
    return(
        <div style={{display:"flex"}}>
            <Route path="/" exact render ={()=><Home {...props} app={app}/>} />
            <Route path="/cart" render ={()=><Cart {...props} app={app}/>} />
            <Route path="/login" render ={()=><Login {...props} app={app}/>} />
        </div>
    )
}

export default  Routes