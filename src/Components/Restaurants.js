import React from "react";
import Kitchen from "./Kitchen";
import KitchenWrapper from "./KitchenWrapper";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom"
import Axios from "axios";
 class Restaurants extends React.Component{

    constructor(){
        super();

        this.state={
            kitchen:[]
        }

        
    }

    componentDidMount(){

        Axios.get("http://127.0.0.1:1234/kitechen/getAll").then(res => {
            this.setState({
                kitchen:res.data
            })
        })
             
    }

        render(){
            
                
                
        
            

                
            return(
                <div className="container cat">
                    {
                        this.props.isLoggedIn==false ? <Redirect to="/" /> : ""       

                    }
                    <div className="row">
                        <div className="pos-fixed">
                        <div className="col-md-3  col-sm-0 catagory hidden-lg-down">
                        
                           <table className="table ">
                               <thead>
                               <tr>
                               <th>
                                Catagories
                               </th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr>
                                   <td>All</td>
                               </tr>


                               <tr className="selected">
                                   <td>Hotels</td>
                               </tr>

                               <tr>
                                   <td>Restaurants</td>
                               </tr>

                               <tr>
                                   <td>Cafes</td>
                               </tr>

                               <tr>
                                   <td>Bars</td>
                               </tr>
                               </tbody>
                           </table>
                        
                        </div>
                        </div>

                        <div className="col-md-3">

                        </div>
                        <div className="col-md-9 kitchen">
                        
                                <KitchenWrapper kitchen={this.state.kitchen}/>
                        </div>

                    </div>


                </div>
            );
        }

}

const mapStateToProps= (store) => {

    return {

        isLoggedIn:store.isLoggedIn
    }

}

export default connect(mapStateToProps) (Restaurants);