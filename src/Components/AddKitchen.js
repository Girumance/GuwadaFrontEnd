import React from "react"
import axios from "axios"
export default class AddKitchen extends React.Component{

  constructor(){
    super();
    this.onSubmit=this.onSubmit.bind(this);

  }


    onSubmit(){
        let title=this.refs.title.value;
        let desc=this.refs.desc.value;
        let type=this.refs.type.value;


        let data={
          "title":title,
          "descriptioin":desc,
          "type":type
        }

        axios.post("http://127.0.0.1:1234/kitechen/save",data).then(res=>{

        console.log("return value:"+res.data);

        });
  
    }


    render(){
        return(
           
            <div className="container">
               <div className="setMargin">
  
                
                <h3>Create Your Kitchen!</h3>
                      <div className="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" className="form-control"  aria-describedby="Add title" placeholder="Title" ref="title"/>
                        <small id="emailHelp" className="form-text text-muted">Please enter your title for your service!</small>
                      </div>
                      <div className="form-group">
                        <label for="discription">Discription</label>
                        <textarea  className="form-control" id="exampleInputPassword1" placeholder="Discription" ref="desc">
                          </textarea>

                          <small id="emailHelp" className="form-text text-muted">Please tell us about your kitchen!</small>
                      </div>

                      <div className="form-group">
                        <label for="file">Kitchen Type</label>
                        <select  className="form-control" id="type" ref="type" > 
                            <option > HOTEL</option>
                            <option> RESTAURANT</option>
                            <option> BAR</option>
                            <option> CAFE</option>
                        </select>
                        <small id="emailHelp" className="form-text text-muted">please select your kitchen type!!</small>
                      </div>

                      <div className="form-group">
                        <label for="file">Picture</label>
                        <input type="file" className="form-control" id="file" placeholder="Picture"/>
                        <small id="emailHelp" className="form-text text-muted">Upload a picture for your kitchen!!</small>
                      </div>




                      <div className="form-group form-check">
                      <label class="form-check-label" for="from">From</label>
                        <input type="time" class="form-check-input" id="from"/>
                       
                      </div>
                      <button onClick={this.onSubmit}  class="btn btn-primary">Create</button>
               

              </div>
              </div>
                          
        );
    }

}