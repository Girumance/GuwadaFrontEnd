import React from "react"

export default class CartList extends React.Component{

        render(){

            return(
                <div className="container-fluid">
                    <div className="row">
                        <h3>{this.props.title}</h3>
                         
                    </div>

                    <div className="row">
                        <div className="col-md-7">
                            {}
                        </div>

                        <div className="col-md-3">
                                {}
                        </div>

                        <div className="col-md-2">

                        </div>
                        
                    </div>
                </div>
            );
        }

}