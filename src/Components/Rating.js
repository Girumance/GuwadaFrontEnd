import React from "react"
import { Paper } from "@material-ui/core"

class Rating extends React.Component{

    constructor(){
        super();
        this.one=this.one.bind(this)
        this.two=this.two.bind(this)
        this.three=this.three.bind(this)
        this.four=this.four.bind(this)
        this.five=this.five(this);
        this.state={
            stars:["fa fa-star","fa fa-star","fa fa-star","fa fa-star","fa fa-star"]
        }
    }

    one(){
        this.doRating(1)
    }

    two(){
        this.doRating(2)
    }

    three(){
        this.doRating(3)
    }

    four(){
        this.doRating(4)
    }

    five(){
        this.doRating(5)
    }

    componentDidMount(){
        this.doRating(3.5)
    }


    doRating(value){
        var x;

        let data=[]
        for(x=0;x<value;x++){
            data[x]="fa fa-star rated";
           
            }

            let newNum=value.toString();

            if(newNum.length>2){
                let decimal=newNum[2];

        

                let newDecimal=parseInt(decimal)

                if(newDecimal>=5){
                    let newValue=parseInt(newNum[0])
                    data[newValue]="fa fa-star-half-full rated"
                    value=newValue;
                    value++;
                }
            }

            for(x=value;x<=5;x++){

                data[x]="fa fa-star-o rated";
            }

           

            

            


            this.setState({
                stars:data
            })

    }

    render(){

        return(
            <Paper >
                <div className="">

                <i onClick={this.one} className={this.state.stars[0]}></i>
                <i onClick={this.two} className={this.state.stars[1]}></i>
                <i onClick={this.three} className={this.state.stars[2]}></i>
                <i onClick={this.four} className={this.state.stars[3]}></i>
                <i onClick={this.five} className={this.state.stars[4]}></i>

                </div>
            </Paper>
        

        )
    }
}

export default Rating;