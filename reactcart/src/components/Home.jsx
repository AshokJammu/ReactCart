import React from 'react'
import data from '../utils/data.json'
const Home =()=>{

    let totalItems = data
    console.log(totalItems)
    return(
        <div>
            <h1>ProductsList</h1>
            {totalItems.map(item=>
            {
              return ( <div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <img src={item.img} alt={item.name} />
                <br/>
                <button >AddToCart</button>
                <br/>
                <br/>
                </div>)
            })}
        </div>
    )
}

export default Home