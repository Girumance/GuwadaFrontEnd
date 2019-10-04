import React from "react";
import Kitchen from "./Kitchen";
import KitchenWrapper from "../KitchenWrapper";

export default class Restaurants extends React.Component{

        render(){

            return(
                <div className="container cat">
                    <div className="row">
                        <div className="pos-fixed">
                        <div className="col-md-3 ">
                        
                           <table className="table table-hover">
                               <th>
                                Catagories
                               </th>
                               <tr>
                                   <td>All</td>
                               </tr>


                               <tr>
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
                           </table>
                        
                        </div>
                        </div>

                        <div className="col-md-3">

                        </div>
                        <div className="col-md-9 kitchen">
                        
                                <KitchenWrapper/>
                        </div>

                    </div>


                </div>
            );
        }

}