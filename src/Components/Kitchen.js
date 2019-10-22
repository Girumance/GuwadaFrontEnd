import React from "react"
import image from "../IMG/Farmhouse.jpg"
import {Redirect} from "react-router-dom"
export default class Kitchen extends React.Component{


    constructor(){
        super();

        this.state={
            clicked:false,
            kitchen:[]
        }

        this.clickHandler=this.clickHandler.bind(this);
    }

    clickHandler(){

            this.setState({
                clicked:true
            })


    }

    render(){
        let path="/Kitechen/"+this.props.kitchen.id
        return(
            

                
        
                <div onClick={this.clickHandler} className="container-fluid">

                {(this.state.clicked==true) ? <Redirect to={path}/> : ""}    
                    <div className="row">
                        <div className="col-md-3">
                                <img className="img-fluid" src={image} />
                        </div>

                        <div className="col-md-8">

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h2>{this.props.kitchen.title}</h2>
                                    </div>

                                    <div className="col-md-8">

                                    </div>

                                </div>

                               

                                <div className="row">
                                    <div className="col-md-12">
                                    
                                    {this.props.kitchen.descriptioin}
                                     </div>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                </div>

        );
    }


}