import React from "react"
import Kitchen from "./Kitchen"

export default class KitchenWrapper extends React.Component{

    render(){
        
        return(

            
            
            <div className="wrapper">

               
                   {

                     

                this.props.kitchen.map( (kitchen,index) =>  
                 <Kitchen key={index} kitchen={kitchen}/> 
                )

                   } 
                   
                   
             

            </div>
        );
    }


}