import React from "react"
import Login from "./Login"
import { connect } from "react-redux";
import { Link,withRouter } from "react-router-dom";
import { BrowserRouter,Redirect } from "react-router-dom";
import { AppBar} from "@material-ui/core"

 class Navigaton extends React.Component{

  constructor(){
    super();
    
    this.state={
      logout:false,
      comp:null
    }

    this.loginHandler=this.loginHandler.bind(this);
    this.onLogOut=this.onLogOut.bind(this)
  }

  onLogOut(){
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    this.setState({
      logout:true
    })

    let action={
      type:"ACTION_LOGOUT"
    }

    this.props.Login(action);
  
  
  }

  loginHandler(){
    let action={
      type:"ACTION_LGCOMP",
      lgcomp:<Login/>
    }
   
  
    
  }


    render(){

      
      
      
        return(
          <AppBar>
            <BrowserRouter>
            {
             this.state.logout==true ? <Redirect to="/" /> : ""
            }
            <nav className="navbar navbar-expand-md navbar-dark Navigation-color fixed-top"> 
            <a className="navbar-brand" href="#">Guwada</a>
            <button className="navbar-toggler white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="#"> <span className="fa fa-home Nav-Icon"></span>Home <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">Service</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">About</Link>
                </li>

              {
                
                this.props.logincomp==true ?

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" href="#" onClick={this.loginHandler} > <i className="fa fa-user-plus"></i>{this.props.account.firstName} </Link>
                  <div className="dropdown-menu bg-secondary" aread-labelledby="navbarDropdown">
                    <Link className="dropdown-item"> <i className="fa fa-gear "></i>    Profile</Link>
                    <Link onClick={this.onLogOut} className="dropdown-item"><i className="fa fa-unlock-alt"></i>  Log Out</Link>

                  </div>
                
                </li>

                : ""
              }
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>

            
          </nav>

          </BrowserRouter>

          </AppBar>

        );
    }
}



const mapStateToProps=(state) =>{

  return {
      logincomp:state.isLoggedIn,
      account:state.account
  }
}

const maspDispacherToProps= (dispacher) =>{

  return {
      Login: (action) => {
          dispacher(action)
      }
  }
}

export default connect(mapStateToProps,maspDispacherToProps) (withRouter(Navigaton) )

