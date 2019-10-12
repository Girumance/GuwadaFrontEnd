import React from "react"
import ShowMenu from "./ShowMenu"

export default class ShowMenuWrapper extends React.Component{
    render(){
        return(
            <div className="container">
                <h3>ALl your Menus</h3>
            <div className="row">
                <div className="col-md-4">
                        <ShowMenu/>
                </div>

                <div className="col-md-4">
                        <ShowMenu/>
                </div>

                <div className="col-md-4">
                        <ShowMenu/>
                </div>


                <div className="col-md-4">
                        <ShowMenu/>
                </div>


                <div className="col-md-4">
                        <ShowMenu/>
                </div>



                <div className="col-md-4">
                        <ShowMenu/>
                </div>



                <div className="col-md-4">
                        <ShowMenu/>
                </div>



                <div className="col-md-4">
                        <ShowMenu/>
                </div>
                <div className="col-md-4">
                        <ShowMenu/>
                </div>


                <div className="col-md-4">
                        <ShowMenu/>
                </div>


                <div className="col-md-4">
                        <ShowMenu/>
                </div>


                </div>
            </div>
        );
    }
}