import React from "react"
import Order from "./Order"
import ShowMenu from "./ShowMenu"
import ShowMenuWrapper from "./ShowMenuWrapper"
import AddKMenu from "./AddMenu"
import DispalyCustomer from "./DispalyCustomer"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default class Dashboard extends React.Component{

    constructor(){
        super()
        this.AddKMenu=this.AddKMenu.bind(this)
        this.ShowMenu=this.ShowMenu.bind(this)
        this.pendingOrder=this.pendingOrder.bind(this)
        this.state={
            currentDisplay:null
        }
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
                        <tr>
                         <td onClick={this.AddKMenu}> Add Menu </td>   
                        </tr>

                        <tr>
                         <td  onClick={this.ShowMenu}> Show Menu</td>   
                        </tr>

                        <tr>
                         <td onClick={this.pendingOrder}>Pending Orders</td>   
                        </tr>


                        <tr>
                         <td>Delivered Orders</td>   
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