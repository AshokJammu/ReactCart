import React, { Component } from 'react';
import Navbar from './Navbar';
import Routes from './Routes';

class MainApplication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartArr: [],
            users:[{
                name:"ashok",
                password:"ashok"
            }],
            isAuth:false
        }

    }

    // 
    isAuthenticate =()=>{
        if(this.state.isAuth){
            return true
        }
        else{
            return false
        }
    }
    // ADD Authentication
    validationUser =({name,password})=>{
        let flag = false

        this.state.users.forEach(user =>{
            if(user.name === name && user.password === password){
                flag = true
            }
        })
        this.setState({
            isAuth:true
        })
        if(flag){
           alert("userisvalid")
        }
        else{
             alert("need valid username and password ")
        }

        return flag
    }

    // product which is selected for add to cart 
    addToCart = (product) => {
        let cart = [...this.state.cartArr]  // we are taking our cartAarray and initialising into cart
        let id = product.id

        // item quantity 
        let item = {
            ...product,
            qty:1
        }
        // logic for adding quantity 
        let sameItem = false;
        for(let i =0;i<cart.length;i++){
            if(cart[i].id === id){
                sameItem = true
                cart[i].qty++
            }
        }

        if(sameItem){
            this.setState({
                cartArr:cart
            })
        }else{
            this.setState({
                cartArr:[...cart, item]
            })
        }

        console.log(id)
    }

    getCartItems=()=>{
        return this.state.cartArr
    }

    render() {
        let appData ={
            addToCart:this.addToCart,
            getCartItems:this.getCartItems,
            isLogin:this.validationUser,
            isAuthenticate:this.isAuthenticate
        }
        return (
            <div>
                <Navbar />
                <Routes app = {appData} />
            </div>
        );
    }
}

export default MainApplication;


















// - function 
//- add to cart
//- authentcation 
//- validation 
// -connect all