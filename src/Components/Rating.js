import React from "react"
import { Paper } from "@material-ui/core"
import Axios from "axios";
import { connect } from "react-redux";
import { send } from "q";

class Rating extends React.Component{

    constructor(props){
        super(props);
        this.one=this.one.bind(this)
        this.two=this.two.bind(this)
        this.three=this.three.bind(this)
        this.four=this.four.bind(this)
        this.five=this.five.bind(this)
        this.state={
            stars:["fa fa-star","fa fa-star","fa fa-star","fa fa-star","fa fa-star"],
            kitchen:[]
        }

       
    }

        sendRating(rate){
            if(!this.props.isLoggedIn || this.props.account.role=="KITCHEN") return;
            let data={
                "userId":this.props.account.id,
                "kitchenId":this.props.id,
                "value":rate
                }

                Axios.post("http://127.0.0.1:1234/rating/rate",data).then( res =>{
                        console.log(res.data)
                })

                }
        


    one(){
        if(!this.props.isLoggedIn || this.props.account.role=="KITCHEN") return;
        this.doRating(1)
        this.sendRating(1)
    }

    two(){
        if(!this.props.isLoggedIn || this.props.account.role=="KITCHEN") return;
        this.doRating(2)
        this.sendRating(2)
    }

    three(){
        if(!this.props.isLoggedIn || this.props.account.role=="KITCHEN") return;
        this.doRating(3)
        this.sendRating(3)
    }

    four(){
        if(!this.props.isLoggedIn || this.props.account.role=="KITCHEN") return;
        this.doRating(4)
        this.sendRating(4)
    }

    five(){
        if(!this.props.isLoggedIn || this.props.account.role=="KITCHEN") return;
        this.doRating(5)
        this.sendRating(5)
    }

    componentDidMount(){
        let path="http://localhost:1234/kitechen/get/"+this.props.id

        Axios.get(path).then( res =>{
            this.setState({
                kitchen:res.data
                
            })

            this.doRating(res.data.rating)
        })

        
        
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

                        if(newDecimal>0){
                    let newValue=parseInt(newNum[0])
                    data[newValue]="fa fa-star-half-full rated"
                    value=newValue;
                    value++;
                        }
                
            }

            value=parseInt(value)

            for(x=value;x<5;x++){

                console.log(x)
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

const mapStateToProps= (state) =>{

    return {
        isLoggedIn:state.isLoggedIn,
        account:state.account
    }
}

export default connect(mapStateToProps) (Rating);