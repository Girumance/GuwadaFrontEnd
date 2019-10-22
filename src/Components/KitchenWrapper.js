import React from "react"
import Kitchen from "./Kitchen"

export default class KitchenWrapper extends React.Component{

    render(){
        console.log(this.props.kitchen)
        return(

            
            
            <div className="wrapper">

                <table className="table">
                   {

                     

                this.props.kitchen.map( (kitchen,index) => <tr>
                <td> <Kitchen key={index} kitchen={kitchen}/> </td>
                 </tr>)

                   } 
                   
                   
                   
                </table>

            </div>
        );
    }


}