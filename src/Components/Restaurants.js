import React from "react";
import Kitchen from "./Kitchen";
import KitchenWrapper from "./KitchenWrapper";
import { connect } from "react-redux";
import {Redirect,withRouter} from "react-router-dom"
import Axios from "axios";
import { Paper } from "@material-ui/core";
 class Restaurants extends React.Component{

    constructor(){
        super();
        this.Hotels=this.Hotels.bind(this);
        this.filterBars=this.filterBars.bind(this)
        this.filterResuarants=this.filterResuarants.bind(this)
        this.Cafes=this.Cafes.bind(this)
        this.All=this.All.bind(this)

        this.state={
            kitchen:[],
            copyKit:[],
            hotels:"",
            restaurants:"",
            bars:"",
            cafes:"",
            all:"selected"
        }

        
    }

    componentDidMount(){

        Axios.get("http://127.0.0.1:1234/kitechen/getAll").then(res => {
            this.setState({
                kitchen:res.data,
            })

            let action={
                type:"ACTION_ADDCOPYKIT",
                copyKit:res.data
            }

            this.props.dispacher(action)
        })
             
    }

    All(){
        let action={
            type:"ACTION_ADDCOPYKIT",
            copyKit:this.state.kitchen
        }

        this.props.dispacher(action)
        this.setState({
            hotels:"",
            restaurants:"",
            bars:"",
            cafes:"",
            all:"selected"
    
        })

    }

    filterResuarants(){

            let newData=[]
       this.state.kitchen.map(kit => {
                if(kit.type==="RESTAURANT")
                newData.push(kit)

        })
        

        let action={
            type:"ACTION_ADDCOPYKIT",
            copyKit:newData
        }

        this.props.dispacher(action)
        
        this.props.dispacher(action)
        this.setState({
            hotels:"",
            restaurants:"selected",
            bars:"",
            cafes:"",
            all:""
    
        })


    }

    Hotels(){

    
            let newData=[]
       this.state.kitchen.map(kit => {
                if(kit.type==="HOTEL")
                newData.push(kit)

        })
        

        let action={
            type:"ACTION_ADDCOPYKIT",
            copyKit:newData
        }

        this.props.dispacher(action)

        this.setState({
            hotels:"selected",
            restaurants:"",
            bars:"",
            cafes:"",
            all:""

        })
    }

    Cafes(){

        
            let newData=[]
       this.state.kitchen.map(kit => {
                if(kit.type==="CAFE")
                newData.push(kit)

        })
        

        let action={
            type:"ACTION_ADDCOPYKIT",
            copyKit:newData
        }

        this.props.dispacher(action)

        this.setState({
            hotels:"",
            restaurants:"",
            bars:"",
            cafes:"selected",
            all:""

        })
    }

    filterBars(){

        
        let newData=[]
   this.state.kitchen.map(kit => {
            if(kit.type==="BAR")
            newData.push(kit)

    })
    

    let action={
        type:"ACTION_ADDCOPYKIT",
        copyKit:newData
    }

    this.props.dispacher(action)


    this.setState({
        hotels:"",
        restaurants:"",
        bars:"selected",
        cafes:"",
        all:""

    })
}


        render(){
                
            return(
                <div className="container cat">
                    {
                        //this.props.isLoggedIn==false ? <Redirect to="/" /> : ""       

                    }
                    <div className="row">
                        
                        <div className="col-md-3 col-sm-0 catagory">
                            
                            <div className="pos-fixed">
                            <Paper>
                           <table className="table ">
                               <thead>
                               <tr>
                               <th>
                                Catagories
                               </th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr onClick={this.All} className={this.state.all}>
                                   <td>All</td>
                               </tr>


                               <tr onClick={this.Hotels} className={this.state.hotels}>
                                   <td>Hotels</td>
                               </tr>

                               <tr onClick={this.filterResuarants} className={this.state.restaurants}>
                                   <td>Restaurants</td>
                               </tr>

                               <tr onClick={this.Cafes} className={this.state.cafes}>
                                   <td>Cafes</td>
                               </tr>

                               <tr  onClick={this.filterBars} className={this.state.bars}>
                                   <td>Bars</td>
                               </tr>
                               </tbody>
                           </table>
                           </Paper>
                           </div>
                          
                        
                        </div>

                      
                        <div className="col-md-9">
                        
                                <KitchenWrapper kitchen={this.props.copyKit}/>
                        </div>

                    </div>


                </div>
            );
        }

}

const mapStateToProps= (store) => {

    return {

        isLoggedIn:store.isLoggedIn,
        copyKit:store.copyKit
    }

}

const mapDispatcherToProps= (dispach) =>{

    return{
        dispacher:(action) =>{
            dispach(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatcherToProps) (withRouter(Restaurants) );