import React from "react"
import image from "../IMG/Farmhouse.jpg"

export default class Kitchen extends React.Component{


    render(){
        return(
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                                <img className="img-fluid" src={image} />
                        </div>

                        <div className="col-md-8">

                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4">
                                        <h2>Hilton</h2>
                                    </div>

                                    <div className="col-md-8">

                                    </div>

                                </div>

                               

                                <div className="row">
                                    <div className="col-md-12">
                                    A local staple for almost 20 years, Aladdin has been serving some of the finest Armenian and Mediterranean food in Addis. Items do not come with pita unless specified in the description.
                                    </div>

                                </div>

                            </div>
                            
                        </div>

                    </div>

                </div>

        );
    }


}