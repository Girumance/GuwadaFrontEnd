import React from "react"
import image1 from "../IMG/chef.jpg"
import image2 from "../IMG/customer.png"
export default class About extends React.Component{

    render(){
        return(
            <div className="container">
          <div className="about">
              <div className="row">
                  <div className="col-md-6 col-sm-6">
                      <div className="row">
                          <div className="col-md-8 text-right control-panel">
                         <h3> Restaurant control panel </h3>
<h5>Restaurant maintain business page by adding each menus from back end and customer order notified in front end.</h5>
                          </div>

                          <div className="col-md-4 col-sm-4">
                            <img className="img-fluid" src={image1}/>
                          </div>

                      </div>

                  </div>

                  <div className="col-md-6 col-sm-6">
                      <div className="row">
                          <div className="col-md-4 col-sm-4">
                          <img className="img-fluid" src={image2}/>
                          </div>

                          <div className="col-md-8 col-md-8 text-left control-panel ">
                         <h3> Customer</h3>
<h5>Customer can choose restaurant  and order food through app, food gets delivered at customer's place.</h5>
                          </div>

                      </div>
                  </div>

              </div>


          </div>

    </div>
        );
    }

}