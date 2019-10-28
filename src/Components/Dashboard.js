import React from "react"
import Order from "./Order"
import ShowMenu from "./ShowMenu"
import ShowMenuWrapper from "./ShowMenuWrapper"
import AddKMenu from "./AddMenu"
import AddKitchen from "./AddKitchen"
import DispalyCustomer from "./DispalyCustomer"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import DashboardShow from "./DashboardShow"
import Axios from "axios"
import { connect } from "react-redux"

 class Dashboard extends React.Component{

    constructor(){
        super()
        this.AddKMenu=this.AddKMenu.bind(this)
        this.ShowMenu=this.ShowMenu.bind(this)
        this.pendingOrder=this.pendingOrder.bind(this)
        this.AddKitchen=this.AddKitchen.bind(this)

       

        this.state={
            currentDisplay:<DashboardShow/>,
            AddKitchen:true
        }
    }

    componentDidMount(){
        let path="http://127.0.0.1:1234/kitechen/isKitchen/"+this.props.account.id
        Axios.get("http://127.0.0.1:1234/kitechen/isKitchen/5da4dd989f083c428ca0d3e").then( res => {

            this.setState({
                AddKitchen:res.data
            })
                
        })
    }
    AddKitchen(){
        this.setState({
            currentDisplay:<AddKitchen/>
        }) 
    }

    AddKMenu(){
        this.setState({
            currentDisplay:<AddKMenu/>
        })
    }

    ShowMenu(){
        this.setState({
            currentDisplay: <ShowMenuWrapper/>
        })
    }

    pendingOrder(){

        this.setState({
            currentDisplay: <Order/>
        })


    }

render(){

    console.log(this.state.AddKitchen)
    return(
        <div className="dashboard">
            
    <div className="container">
            <div className="row">
                
                <div className="col-md-2">
                <div className="dashboard_menu">
                    <table className="table table-bordere">
                        <tr>
                            <th>Dashboard</th>
                    
                        </tr>

                        {
                            this.state.AddKitchen===false ? <tr onClick={this.AddKitchen}><th>Add Kitchen</th> </tr>  :""
                        
                        }
                        <tr>
                         <th onClick={this.AddKMenu}> Add Menu </th>   
                        </tr>

                        <tr>
                         <th  onClick={this.ShowMenu}> Show Menu</th>   
                        </tr>

                        <tr>
                         <th onClick={this.pendingOrder}>Pending Orders</th>   
                        </tr>


                        <tr>
                         <th>Delivered Orders</th>   
                        </tr>
                    </table>
                    </div>
                    </div>

                    <div className="col-md-10">

                   {
                       this.state.currentDisplay
                   }
                    

                    </div>
                    </div>

                    

            </div>

            
            </div>
    
    );
}

}
const mapStateToProps= (state) =>{
    return {
        account:state.account
    }
}

export default connect(mapStateToProps) (Dashboard)