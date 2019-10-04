import React from "react"


export default class Poster extends React.Component{

render(){
    return (
        <div className="Poster container-fluid">
            <div className="Poster-Shadow container-fluid">
            </div>

            <div className="Quote text-center container-fluid">

                <p><span className="Quote-upper">“Ask not what you can do for your country.</span> <br/>
                    <span className="Quote-lowwer "> &nbsp;&nbsp;Ask what’s for lunch.”</span><br/>
                    <span className="Quote-owner">― Orson Welles</span></p><br/>

                    <div className="contain poster-buttons">
                        <div className="row ">
                            
                            <div className="col-md-4">
                                <button className=" btn btn-outline-warning btn-block btn-lg">Log In</button>
                            </div>

                            <div className="col-md-4">
                                <button className=" btn btn-outline-warning btn-block btn-lg">Sign Up</button>
                            </div>


                        </div>

                    </div>

            </div>


        </div>
    );
}

}