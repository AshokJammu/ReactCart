import React from 'react'
import data from '../utils/data.json'


const Home = (props) => {
    console.log(props)
    const {app} = props
   const handleClick = (id)=>{
    let item = data.find(item=>item.id===id)
    app.addToCart(item)
   }

    return (
        <div>
            <h1>ProductsList</h1>
            {data.map(item => {
                return (<div>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                    <img src={item.img} alt={item.name} />
                    <br />
                    <button onClick = {()=>handleClick(item.id)}>AddToCart</button>
                    <br />
                    <br />
                </div>)
            })}
        </div>
    )
}

export default Home