import React from "react"
import Axios from "axios"
import {Redirect, withRouter} from 'react-router-dom';
import {connect} from "react-redux"
import login from "../IMG/loginbg.jpg"
class Login extends React.Component{

    constructor(props){
        super(props);

        
        
        this.onUserName=this.onUserName.bind(this)
        this.onPassword=this.onPassword.bind(this)
        this.loginHandler=this.loginHandler.bind(this)
        this.onFirstName=this.onFirstName.bind(this)
        this.onLastName=this.onLastName.bind(this)
        this.onEmail=this.onEmail.bind(this)
        this.onBlock=this.onBlock.bind(this)
        this.onRoom=this.onRoom.bind(this)
        this.onPhone=this.onPhone.bind(this)
        this.onPass=this.onPass.bind(this)
        this.onCPass=this.onCPass.bind(this)
        this.onSignUp=this.onSignUp.bind(this)
        this.onType=this.onType.bind(this)
        this.onRememberMe=this.onRememberMe.bind(this)
        this.login=this.login.bind(this)
        this.state={

                username:"",
                password:"",
                fname:"",
                lname:"",
                email:"",
                block:"",
                room:"",
                phone:"",
                password:"",
                cpassword:"",
                role:"USER",
                rememberMe:false,


                comp:<div>
            <span className="fa fa-user Nav-Icon"></span>    <input onChange={this.onUserName} placeholder="UserName" /><br />
            <span className="fa fa-lock Nav-Icon"></span>    <input onChange={this.onPassword} placeholder="password" /><br />
            <div className="rememberMe">
            <input onChange={this.onRememberMe} type="checkbox"  /> <h6>Remember me</h6><br />
            </div>
               <button  className="btn  btn-warning" onClick={this.login}>Login</button>
               </div> 

        }

        this.clogin=this.clogin.bind(this)
        this.csignup=this.csignup.bind(this)
        
       let username= localStorage.getItem("username")
        let password= localStorage.getItem("password") 

        if(username!=null && password!=null){
                this.loginHandler(username,password)
        }
        
        
       

}

      

    

    /**             <div>
     *              <input placeholder="UserName" ref="username"/><br />
                    <input placeholder="password" ref="password"/><br />
                    <button  className="btn  btn-warning" onClick={this.loginHandler}>Login</button>
                    </div>




//signup

                   
     * 
     */

    onRememberMe(){
        this.setState({
            rememberMe:!this.state.rememberMe
        })
    }


 onSignUp(){

    if(this.state.password!=this.state.cpassword)
    return;

         let data={
            firstName:this.state.fname,
            lastName:this.state.lname,
            email:this.state.email,
            phoneNumber:this.state.phone,
            password:this.state.password,
            role:this.state.role,
            blockNumber:this.state.block,
            roomNumber:this.state.room,
            
         }

         Axios.post("http://127.0.0.1:1234/account/signup",data).then( res => {

         console.log(res.data)
         })

        
     }

onFirstName(e){
            this.setState({
                fname:e.target.value
            })
}
onLastName(e){
        this.setState({
            lname:e.target.value
        })
}

onEmail(e){
    this.setState({
        email:e.target.value
    })
}


onPhone(e){
    this.setState({
        phone:e.target.value
    })
}
 

onBlock(e){
    this.setState({
        block:e.target.value
    })
}

onRoom(e){
    this.setState({
        room:e.target.value
    })
}

onPass(e){
    this.setState({
        password:e.target.value
    })
}


onCPass(e){
    this.setState({
        cpassword:e.target.value
    })
}

onType(e){

    this.setState({
        role:e.target.value
    })
}

login(){
    let username=this.state.username
    let password=this.state.password  

    this.loginHandler(username,password)
}


    loginHandler(username,password){


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
           
      <div className="rememberMe">
            <input onChange={this.onRememberMe} type="checkbox"  /> <h6>Remember me</h6><br />
            </div>
           <button onClick={this.login} type="submit" className="btn  btn-warning" >Login</button>
          
           </div>
        })

    }
    csignup(){

        this.setState({
            comp: <div>
            <div className="row">
                <div className="col-md-6 col-sm-6">
                <input onChange={this.onFirstName} placeholder="FirstName" /><br />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <input onChange={this.onLastName} placeholder="LastName" /><br />
                </div>
            </div>
            

            <div className="row">
                <div className="col-md-6">
                <input onChange={this.onEmail} placeholder="Email" /><br />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <input onChange={this.onPhone} placeholder="Phone Number"/><br />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                <input onChange={this.onBlock} placeholder="Block Number" /><br />
                </div>
                    <div className="col-md-1"></div>
                <div className="col-md-2">
                <input onChange={this.onRoom} placeholder="Room Number" /><br />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                <input onChange={this.onPass} placeholder="Password" /><br />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <input onChange={this.onCPass} placeholder="Confirm Password" /><br />
                </div>
            </div>

            <div className="row">
               
                <div className="col-md-6">
                <select onChange={this.onType}>
                    <option selected value="USER">User</option>
                    <option value="KITCHEN">Kitchen</option>

                </select>
                </div>

            </div>

           
            <button  className="btn  btn-warning" onClick={this.onSignUp}>Sign Up</button>
            </div>

        
        })

    }

    render(){

        if(this.props.isLoggedIn==true ){
                    if(this.props.account.role=="USER")
                    this.props.history.push("/Resturants")
                    else
                    this.props.history.push("/dashboard")
        }

            return(
                
                <div className="col-md-7 col-sm-12 container-fluid login">
                    
                    
                
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

export default  connect(mapStateToProps,mapDispatchToProps) (withRouter(Login));

