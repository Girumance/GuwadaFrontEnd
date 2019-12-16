import React from "react"
import Login from "./Login"
import { connect } from "react-redux";
import { Link,withRouter,NavLink } from "react-router-dom";
import { BrowserRouter,Redirect } from "react-router-dom";
import { AppBar, Paper, Toolbar} from "@material-ui/core"
import SearchResult from "./SearchResult"
import Axios from "axios";

import Uuid from "uuid/v4"


 class Navigaton extends React.Component{

  constructor(props){
    super(props);
    
    this.state={
      logout:false,
      comp:null,
      search:""
      
    }

    this.loginHandler=this.loginHandler.bind(this);
    this.onLogOut=this.onLogOut.bind(this)
    this.onSearch=this.onSearch.bind(this);
    this.onSearchButton=this.onSearchButton.bind(this)
    

    
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
  
  onSearchButton(){
   
let title=this.refs.search.value;
let path="http://127.0.0.1:1234/kitechen/bytitle/"+title;

Axios.get(path).then( res=> {
  if(res.data.length>2){
    let action={
      type:"ACTION_SEARTITLE",
      searchTitle:""
  }  
  
  this.props.Login(action)


  let action2={
    type:"ACTION_ADDSEARCH",
    searchRes:[]
  }

  this.props.Login(action2)

  this.props.history.push("/Kitechen/"+res.data)
  }

  
})

   

  }

 

  onSearch(e){

    
    let action={
      type:"ACTION_SEARTITLE",
      searchTitle:e.target.value
  }  
  
  this.props.Login(action)
  

    
    
    if(e.target.value.length>0){

    let data={
      search:e.target.value
    }

    Axios.post("http://127.0.0.1:1234/kitechen/search",data).then( res =>{

    

    if(res.data.length<1){
      let action={
        type:"ACTION_ADDSEARCH",
        searchRes:[]
      }

      this.props.Login(action)
    }
    else
    {
      let action={
        type:"ACTION_ADDSEARCH",
        searchRes:res.data
      }

      this.props.Login(action)
    }

    


    })

  }else{
    let action={
      type:"ACTION_ADDSEARCH",
      searchRes:[]
    }

    this.props.Login(action)
  }

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
                  <Link className="nav-link" to="/"> <span className="fa fa-home Nav-Icon"></span>Home <span className="sr-only">(current)</span></Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">Service</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="#">About</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/Resturants">Restaurants</Link>
                </li>

                {
                  this.props.account.role=="KITCHEN" && this.props.logincomp ?

                  <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li> : null
                }


              {
                
                this.props.logincomp==true ?

                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" href="#" onClick={this.loginHandler} > <i className="fa fa-user-plus"></i>{this.props.account.firstName} </Link>
                  <div className="dropdown-menu bg-secondary" aread-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/profile"> <i className="fa fa-gear "></i>    Profile</Link>
                    <Link onClick={this.onLogOut} className="dropdown-item"><i className="fa fa-unlock-alt"></i>  Log Out</Link>

                  </div>
                
                </li>

                : ""
              }
              </ul>
            
              <div className="form-inline my-2 my-lg-0">
                <div className="search">
                
                
                 <input  value={this.props.searchTitle} ref="search" onChange={this.onSearch}  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <div className="search-res"> 
                  <Paper>
                    
                  
              {
                this.props.searchRes.map( (res,index) => <SearchResult key={index} data={res}/>)
                
              }
                    
                    </Paper>
                    </div>
                  </div>

                <button onClick={this.onSearchButton} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </div>
              
            </div>

           
          </nav>

         
         
          </AppBar>

        );

        
          
        
    }
}



const mapStateToProps=(state) =>{

  return {
      logincomp:state.isLoggedIn,
      account:state.account,
      searchRes:state.searchRes,
      searchTitle:state.searchTitle
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

