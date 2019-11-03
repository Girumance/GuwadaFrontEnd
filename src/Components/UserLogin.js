import React from "react"
import { Paper } from "@material-ui/core"
import Axios from "axios"
import { connect } from "react-redux";

class UserLogin extends React.Component{

    constructor(){
        super();
        this.loginHandler=this.loginHandler.bind(this);
        this.onRememberMe=this.onRememberMe.bind(this)
        this.state={
            rememberMe:false,
        }
    }
    onRememberMe(){
        this.setState({
            rememberMe:!this.state.rememberMe
        })
    }

    loginHandler(){

        let username=this.refs.username.value;
        let password=this.refs.password.value;


        let data={
            "username":username,
            "password":password
            
           }
                     
                 

        Axios.post("http://127.0.0.1:1234/login",data).then(res=>{


        let data=res.data;

        let action={
            type:"ACTION_ADDACCOUNT",
            account:data
        }

        this.props.dispatcher(action)

                if(data.password.startsWith("Bearer")){
                    this.props.dispatcher({type:"ACTION_LOGIN"})
                    if(this.state.rememberMe){
                   localStorage.setItem("username",this.state.username)
                   localStorage.setItem("password",this.state.password)
                    }
                }
                


        })
        
        
        /*.catch(error =>{
            console.log("wrong username and password")
        }  
        );*/


    }

    render(){
        return(
            <Paper>
            <div class="wrapper">
       
      <h4 class="form-signin-heading">Please login</h4>
      
        <input type="text" class="form-control" ref="username" placeholder="Email Address" required="" autofocus="" />
     
        <input type="password" class="form-control" ref="password" placeholder="Password" required=""/>      
      <label class="checkbox">
        <input onChange={this.onRememberMe} type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
      </label>
      <button onClick={this.loginHandler} class="btn  btn-primary btn-block">Login</button>   
   </div>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => {

    return{
        state
    }

}

const mapDispatcherToProps = (dispatch) => {

    return{
        dispatcher: (action)=>{
                dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatcherToProps) (UserLogin);