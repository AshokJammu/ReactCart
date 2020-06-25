import React from 'react'
import { Redirect } from 'react-router-dom'

class  Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            username:"",
            pwd:""
        }
    }
    // console.log(props)

    handleSubmit = ()=>{
        const {app} = this.props
        console.log(app)
        const {username,pwd} = this.state
        let user = {username,pwd}
        console.log(user)
        app.isLogin(user)
    }

    render(){
        const {username,pwd} = this.state
        const { app } = this.props

        if(app.isAuthenticate()){
            return <Redirect to = "/"/>
        }
        return(
            <div>
                UserName:
                <input type="text"
                    value={username}
                    onChange ={ e => this.setState({username:e.target.value})}
                />
                <br/>
                <br/>
                Password:
                <input type="text"
                    value={pwd}
                    onChange ={e => this.setState({pwd:e.target.value})}
                /> 
                <br/>
                <br/>
                <button onClick={this.handleSubmit}>Submit</button>              
            </div>
        )
    }
    
}

export default Login