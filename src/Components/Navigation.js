import React from "react"
import Login from "./Login"
export default class Navigaton extends React.Component{

  constructor(){
    super();
    
    this.state={
      loginClicked:false
    }

    this.loginHandler=this.loginHandler.bind(this);
  }

  loginHandler(){
    this.setState({
      loginClicked:!this.state.loginClicked
    });

    console.log("log:"+this.state.loginClicked)

  
    
  }


    render(){
        return(

            <nav class="navbar navbar-expand-md Navigation-color fixed-top"> 
            <a class="navbar-brand" href="#">Guwada</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Service</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#" onClick={this.loginHandler} >Log in</a>
                </li>

              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>

            
          </nav>

          

        );
    }
}

