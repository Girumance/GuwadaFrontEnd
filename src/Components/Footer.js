import React from "react"

 export  default class Footer extends React.Component{

    render(){
        return (

            <div className="Footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">

                                <h2>Questions?</h2>
                                <p>Want to know more about us or have a question? Read our FAQ's (Frequently Asked Questions) or contact us!</p>
                            </div>

                            <div className="col-md-3">

                           <h3>FAQ</h3>
<p>Before calling or sending an e-mail, read our FAQs to see if we've already answered your question.</p>

                            </div>


                            <div className="col-md-3">
                          <h3>  Own a restaurant? </h3>
<p>If you own a restaurant and would like to reach more customers, learn more about how to partner with us.</p>
                            </div>

                            <div className="col-md-3">

                           <h4>Get In Touch With US</h4>
                                
                                <p>+251-966-935-941</p>
                                <p>help@guwada.com</p>

                            </div>


                        </div>

                    </div>
            </div>

        );

    }


}