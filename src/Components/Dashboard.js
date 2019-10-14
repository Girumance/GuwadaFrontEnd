import React from "react"
import Order from "./Order"
import ShowMenu from "./ShowMenu"
import ShowMenuWrapper from "./ShowMenuWrapper"
import AddKMenu from "./AddMenu"
import DispalyCustomer from "./DispalyCustomer"

export default class Dashboard extends React.Component{

render(){
    return(
        <div className="dashboard">
        <div className="container">
            <div className="row">
                
                <div className="col-md-2">
                <div className="dashboard_menu">
                    <table className="table table-bordered">
                        <tr>
                            <th>Dashboard</th>
                    
                        </tr>
                        <tr>
                         <td>Add Menu</td>   
                        </tr>

                        <tr>
                         <td>Show Menu</td>   
                        </tr>

                        <tr>
                         <td>Pending Orders</td>   
                        </tr>


                        <tr>
                         <td>Delivered Orders</td>   
                        </tr>
                    </table>
                    </div>
                    </div>

                    <div className="col-md-10">

                        <Order/>

                </div>
                </div>

                

            </div>

            <DispalyCustomer/>
            </div>
    
    );
}

}