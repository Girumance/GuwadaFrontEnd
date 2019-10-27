import React from "react"
import Poster from "./Poster"
import RatedResturants from "./RatedResturants"
import Services from "./Services"
import  About from "./About"

class Home extends React.Component{

    render(){

        return(
                <div>
                     <Poster/>
                     <RatedResturants/>
                     <Services/> 
                    <About/>
                </div>

        );
    }

    
}


export default Home;
