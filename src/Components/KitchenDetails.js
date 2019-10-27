import React from "react"
import image from "../IMG/service.jpg"
import Menu from "./Menu"
import Cart from "./Cart"
import Catagory from "./Catagory"
import Axios from "axios"
import { connect } from "react-redux"

var kit={"girum":{"fd":"Girum"},"kal":"kal"};

class KitchenDetails extends React.Component{
        
    constructor(){
        super()

        this.state={

            kitechen:[]
        }
       
        
       
    }

    componentDidMount(){

       
        let path="http://localhost:1234/kitechen/get/"+this.props.match.params.id;
        Axios.get(path).then(res =>{

            this.setState({

                kitechen:res.data
            });


        })
        
        let data={
            type:"ACTION_ADDKIT",
            kit:this.state.kitechen
        }

        this.props.AddKitchen(data)

    }


    render(){
       
    
        
        return(
            <div className="container banner">
            
                <div className="row">
                    <div className="col-md-4 ">
                        <img className="img-fluid thumbnails" src={image}/>
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>{this.state.kitechen.title}</h2>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <h3>Rating ****</h3>
                            </div>

                            <div className="col-md-8">
                                <h3><a className="btn btn-danger disabled">Closed</a> </h3>
                                    
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
                            <Cart/>
                    </div>

                </div>
            </div>





           
        );
    }
}

const  mapStateToProps=(state) =>{

return {
    kit:state.kitechen
}

}

const mapDispatchToProps=(dispatch) =>{

    return{

        AddKitchen:(action) =>{
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (KitchenDetails);