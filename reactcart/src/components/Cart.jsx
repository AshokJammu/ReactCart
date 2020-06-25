import React from 'react'

const Cart =(props)=>{
    const {app} = props

    const cartItems = app.getCartItems()
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