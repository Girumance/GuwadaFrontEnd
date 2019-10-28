import React from "react"
import Axios from "axios"
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux"
import login from "../IMG/loginbg.jpg"
class Login extends React.Component{

    constructor(props){
        super(props);
        this.onUserName=this.onUserName.bind(this)
        this.onPassword=this.onPassword.bind(this)
        this.loginHandler=this.loginHandler.bind(this)
        this.state={

                username:"",
                password:"",

                comp:<div>
            <span className="fa fa-user Nav-Icon"></span>      <input onChange={this.onUserName} placeholder="UserName" /><br />
            <span className="fa fa-lock Nav-Icon"></span>    <input onChange={this.onPassword} placeholder="password" /><br />
               
               <button  className="btn  btn-warning" onClick={this.loginHandler}>Login</button>
               </div> 

        }

        this.clogin=this.clogin.bind(this)
        this.csignup=this.csignup.bind(this)

        
        
       

}

      

    

    /**             <div>
     *              <input placeholder="UserName" ref="username"/><br />
                    <input placeholder="password" ref="password"/><br />
                    <button  className="btn  btn-warning" onClick={this.loginHandler}>Login</button>
                    </div>




//signup

                   
     * 
     */


    loginHandler(){

        

        let username=this.state.username
        let password=this.state.password

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

        this.props.Login(action)

                if(data.password.startsWith("Bearer")){
                    this.props.Login({type:"ACTION_LOGIN"})
                   
                    
                }
                


        })
        
        
        /*.catch(error =>{
            console.log("wrong username and password")
        }  
        );*/


    }

    onUserName(e){
            this.setState({
                username:e.target.value
            })
    }

    onPassword(e){
                this.setState({
                    password:e.target.value
                })
    }

    clogin(){
        this.setState({
            comp:<div> 
                
      <span className="fa fa-user Nav-Icon"></span>      <input onChange={this.onUserName} placeholder="UserName" /><br />
      <span className="fa fa-lock Nav-Icon"></span>  <input onChange={this.onPassword} type="password" placeholder="password" /><br />
           <button onClick={this.loginHandler} type="submit" className="btn  btn-warning" >Login</button>
          
           </div>
        })

    }
    csignup(){

        this.setState({
            comp: <div>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                <input placeholder="FirstName" /><br />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <input placeholder="LastName" /><br />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                <input placeholder="Email" /><br />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <input placeholder="Phone Number"/><br />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                <input placeholder="Block Number" /><br />
                </div>
                    <div className="col-md-1"></div>
                <div className="col-md-2">
                <input placeholder="Room Number" /><br />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                <input placeholder="Password" /><br />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <input placeholder="Confirm Password" /><br />
                </div>
            </div>
            <button  className="btn  btn-warning" onClick={this.loginHandler}>Sign Up</button>
            </div>

        
        })

    }

    render(){

            return(
                
                <div className="col-md-7 col-sm-12 container-fluid login">
                    
                    {
                        (this.props.isLoggedIn==true ) ? (this.props.account.role=="USER") ? <Redirect to="/Resturants" /> : <Redirect to="/dashboard" /> : " "
                        

                    }
                
                <div className="row">
                    <div className="col-xs-6 col-sm-5 col-md-6 ">
                        <div className="login-header">
                        <h3 className="signup"> <span onClick={this.clogin}> Login </span>  | <span onClick={this.csignup}> Sign Up </span> </h3>
                        </div>
                        <hr />
                        <div className="logininputs">
                                {
                                    this.state.comp
                                }
                    </div>      


                    </div>
                    <div className="  col-md-6 hidden-sm-down cut ">
                        
                    </div>

                

                </div>
                </div>
                
            );
    }
}

const mapStateToProps= (state) =>{

return{
    isLoggedIn:state.isLoggedIn,
    lscomp:state.lscomp,
    account:state.account
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

