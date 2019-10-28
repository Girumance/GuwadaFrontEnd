import React from "react"


export default class DashboardShow extends React.Component{

    render(){

        return(
            <div className="container dashboardshow">
                <div className="row">
                <div className="col-md-4">
                        <div className="card dash-height">
                            <div className="row">
                                <div className="col-md-4 text-center dashicon">
                                    <span className="fa fa-cutlery fa-lg fa-3x "></span>
                                </div>

                                <div className="col-md-8">

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <h3>Today's Orders</h3>
                                </div>

                            </div>

                        </div>
                </div>

                <div className="col-md-4">
                        <div className="card dash-height">

                        </div>
                </div>

                <div className="col-md-4 ">
                <div className="card dash-height">

                </div>
                </div>
                </div> 
            </div>
        );

    }
}
