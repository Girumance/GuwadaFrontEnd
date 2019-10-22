import React from "react"
import Axios from "axios"
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux"
class Login extends React.Component{

    constructor(){
        super();
        this.loginHandler=this.loginHandler.bind(this)

    }


    loginHandler(){

        console.log(this.props)

        let username=this.refs.username.value;
        let password=this.refs.password.value;

        let data={
            "username":username,
            "password":password
            
           }
                     
                 

        Axios.post("http://localhost:1234/login",data).then(res=>{


        let data=res.data;
                if(data.startsWith("Bearer")){
                    this.props.Login({type:"ACTION_LOGIN"})
                    console.log("val:"+this.props.isLoggedIn)
                    
                }
                


        });


    }

    render(){

            return(
                <div className="login">
                    {
                        this.props.isLoggedIn==true ? <Redirect to="/Resturants" /> : ""

                    }
                    <input placeholder="UserName" ref="username"/><br />
                    <input placeholder="password" ref="password"/><br />
                    <button onClick={this.loginHandler}>Login</button>
                </div>
            );
    }
}

const mapStateToProps= (state) =>{

return{
    isLoggedIn:state.isLoggedIn
} 

}

const mapDispatchToProps=(dispatch) =>{

return{
    Login:(action)=>{
                dispatch(action)
    }
}

}

export default connect(mapStateToProps,mapDispatchToProps) (Login);

