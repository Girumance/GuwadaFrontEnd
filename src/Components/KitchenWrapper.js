import React from "react"
import Kitchen from "./Kitchen"

export default class KitchenWrapper extends React.Component{

    render(){
        
        return(

            
            
            <div className="wrapper">

                <table className="table">
                    <tbody>
                   {

                     

                this.props.kitchen.map( (kitchen,index) => <tr key={index}>
                <td> <Kitchen kitchen={kitchen}/> </td>
                 </tr>)

                   } 
                   
                   
                   </tbody>
                </table>

            </div>
        );
    }


}