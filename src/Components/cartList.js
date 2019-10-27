import React from "react"

export default class CartList extends React.Component{

        render(){

            return(
                <div className="container-fluid">
                

                    <div className="row">
                        <div className="col-md-5 col-xs-5">
                        <h5>{this.props.title}</h5>
                        </div>
                        <div className="col-md-5 col-xs-4 quantitiy"  >
                        <input className="form-control" type="number" defaultValue="1"/>
                        </div>
                       

                        <div className="col-md-1 col-xs-1">
                                <span className="fa fa-trash fa-md"></span>
                        </div>
                        
                    </div>
                    <hr />
                </div>
            );
        }

}