import React from "react"
import Login from "./Login"
import { connect } from "react-redux";

 class Navigaton extends React.Component{

  constructor(){
    super();
    
    this.state={
      loginClicked:false,
      comp:null
    }

    this.loginHandler=this.loginHandler.bind(this);
  }

  loginHandler(){
    let action={
      type:"ACTION_LGCOMP",
      lgcomp:<Login/>
    }
   
  
    
  }


    render(){
        return(

            <nav className="navbar navbar-expand-md navbar-dark Navigation-color fixed-top"> 
            <a className="navbar-brand" href="#">Guwada</a>
            <button className="navbar-toggler white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#"> <span className="fa fa-home Nav-Icon"></span>Home <span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">Service</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={this.loginHandler} >Log in</a>
                </li>

              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>

            
          </nav>

          

        );
    }
}

const mapStateToProps=(state) =>{

  return {
      logincomp:state.logincomp
  }
}

const maspDispacherToProps= (dispacher) =>{

  return {
      Login: (action) => {
          dispacher(action)
      }
  }
}

export default connect(mapStateToProps,maspDispacherToProps) (Navigaton)

