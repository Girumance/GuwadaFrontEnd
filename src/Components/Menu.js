import React from "react"
import MenuList from "./MenuList"

export default class Menu extends React.Component{
    render(){
        return(
            <div className="row">
                <h3>Dishes</h3>
                <table className="table">
                    <tr>
                        <td> <MenuList/></td>
                    </tr>

                    <tr>
                        <td> <MenuList/></td>
                    </tr>


                    <tr>
                        <td> <MenuList/></td>
                    </tr>


                    <tr>
                        <td> <MenuList/></td>
                    </tr>


                    <tr>
                        <td> <MenuList/></td>
                    </tr>
                </table>

            </div>
        );
    }
}