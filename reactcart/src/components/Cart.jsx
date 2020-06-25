import React from 'react'
import { Redirect } from 'react-router-dom'

const Cart =(props)=>{
    const {app} = props

    const cartItems = app.getCartItems()
    const valid = app.isAuthenticate()

    if(!valid){
        alert("you have to login first")
        return <Redirect to = '/login'/>
    }
    console.log(cartItems)
    return(
        <div>
            {cartItems.map(item=>{
                return(
                    <div>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                        <div>{item.qty}</div>
                        <img src={item.img} alt= {item.name}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Cart