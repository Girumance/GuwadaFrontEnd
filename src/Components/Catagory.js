import React from "react"
import { Paper } from "@material-ui/core";

export default class Catagory extends React.Component{

    

    render(){
        return(

            <Paper>
            
            <div className="col-md-10">

                <table className="table "> 
                <thead><tr><th>Catagory</th></tr></thead>
                    <tbody>
                    <tr>
                        <td>Soda</td>
                    </tr>

                    <tr>
                        <td>Breakfast</td>
                    </tr>

                    <tr>
                        <td>Launch</td>
                    </tr>

                    <tr>
                        <td>Dinner</td>
                    </tr>

                    <tr>
                        <td>Fish</td>
                    </tr>

                    <tr>
                        <td>Pizza</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                </Paper>
        );
    }
}
