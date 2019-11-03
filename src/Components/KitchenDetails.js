import React from "react"
import image from "../IMG/service.jpg"
import Menu from "./Menu"
import Cart from "./Cart"
import Catagory from "./Catagory"
import Axios from "axios"
import { connect } from "react-redux"
import {Redirect,withRouter} from "react-router-dom"
import Rating from "./Rating"
import { Paper } from "@material-ui/core"
import UserLogin from "./UserLogin"



class KitchenDetails extends React.Component{
        
    constructor(props){
        super(props)
        this.onCheckout=this.onCheckout.bind(this)
        this.getData=this.getData.bind(this)
        this.state={

            kitechen:[],
            image:[],
            
            
            
            
        }
        //if(!this.props.isLoggedIn)
           // this.props.history.push("/")
           console.log("constructor")
        
       
    }

    getData(){
       
        let path="http://127.0.0.1:1234/kitechen/get/"+this.props.match.params.id;
        Axios.get(path).then(res =>{

            let action2={
                type:"ACTION_ADDKITCHEN",
                kit:res.data
            }

            this.props.AddKitchen(action2)

            this.setState({

                kitechen:res.data
            });

            let action={
                type:"ACTION_ADDMEALARRAY",
                meal:[]
            }

            this.props.AddKitchen(action)

            


        })
        
        let data={
            type:"ACTION_ADDKIT",
            kit:this.state.kitechen
        }

        

        this.props.AddKitchen(data)

    }

    componentDidMount(){      
       
       this.getData();
    
       
    }

    onCheckout(){

        if(this.props.meal.length<1)
        return

        let data={
            customerId:this.props.account.id,
            kitchenId:this.props.match.params.id,
            mealorder:this.props.meal
        }
    
        Axios.post("http://127.0.0.1:1234/order/save",data).then( res =>{
            console.log(res)
        })
    }

    render(){
        
        

        
        return(

            
            <div className="container banner">
                    {
                       // this.props.isLoggedIn==false ? <Redirect to="/" /> : ""       

                     }
                
            
                <div className="row">
                    <div className="col-md-4 ">
                        <Paper>
                        <img className="img-fluid thumbnails" src={`http://localhost:1234/image/download/${this.props.match.params.id}`}/>
                        </Paper>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>{this.state.kitechen.title}</h2>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                             <h3><Rating id={this.props.match.params.id}/></h3>
                            </div>

                            <div className="col-md-8">
                                <h1 className="badge badge-danger">Closed</h1>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <h5> Mon – Fri 11:00 AM-3 PM</h5>
                            </div>
                            <div className="col-md-8">
                                <h4>Type:{this.state.kitechen.type}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h5>{this.state.kitechen.descriptioin}</h5>
                            </div>

                        </div>

                        
                    </div>


                </div>
                <br />

                <div className="row">
                    
                    <div className="col-md-2">
                    
                        <Catagory/>
                        
                    </div>
                    
                    <div className="col-md-7">
                        <Menu id={this.props.match.params.id}/>
                    </div>

                    <div className="col-md-3 cartMargin">
                            {
                            this.props.isLoggedIn==false ?<UserLogin/> : this.props.account.role=="USER"?
                            <React.Fragment>
                            <Cart/> <button onClick={this.onCheckout} className={this.props.meal.length>0 ? "btn  btn-primary btn-block " :"btn  btn-primary btn-block disabled"} >Check Out </button>)
                            </React.Fragment> :null
                            }
                    
                            </div>

                </div>
            </div>
  
        );
    }
}

const  mapStateToProps=(state) =>{

return {
    kit:state.kit,
    meal:state.mealorder,
    account:state.account,
    isLoggedIn:state.isLoggedIn
}

}

const mapDispatchToProps=(dispatch) =>{

    return{

        AddKitchen:(action) =>{
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(KitchenDetails) );