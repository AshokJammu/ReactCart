import React from 'react'

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
        const {username,pwd} = this.state
        let user = {username,pwd}
        console.log(user)
        app.isLogin(user)
    }

    render(){
        const {username,pwd} = this.state
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