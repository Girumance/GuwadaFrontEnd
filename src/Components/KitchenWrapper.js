import React from "react"
import Kitchen from "./Kitchen"

export default class KitchenWrapper extends React.Component{

    render(){
        return(

            <div className="wrapper">

                <table className="table">
                    <tr>
                        <td> <Kitchen/> </td>
                    </tr>

                    <tr>
                        <td> <Kitchen/> </td>
                    </tr>

                    <tr>
                        <td> <Kitchen/> </td>
                    </tr>

                    <tr>
                        <td> <Kitchen/> </td>
                    </tr>

                    <tr>
                        <td> <Kitchen/> </td>
                    </tr>
                </table>

            </div>
        );
    }


}