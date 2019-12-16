import React from "react"
import axios from "axios"
import { connect } from "react-redux";
import Uuid from "uuid/v4"
import { Paper, AppBar } from "@material-ui/core";



class AddKMenu extends React.Component{

  constructor(){
    super();
    this.addMenu=this.addMenu.bind(this);
    this.onFile=this.onFile.bind(this);

    this.state={
      image:null
    }

  }

  
  onFile(e){
    this.setState({
      image:e.target.files[0]
    })
    console.log(e.target.files[0])

  }

  onImageUpload(id){
    const formData=new FormData();
    formData.append("photo",this.state.image,this.state.image.name)

    let path="http://127.0.0.1:1234/image/upload/"+id
    
    axios.post(path,formData).then(res => {

    
    })
  }

  addMenu(){

    let title=this.refs.title.value;
    let desc=this.refs.desc.value;
    let price=this.refs.price.value;
    let type=this.refs.type.value;

    const id=Uuid();

    let data={
        "id":id,
        "title":title,
        "description":desc,
        "price":price,
        "menuType":type
    }

    
      let path="http://127.0.0.1:1234/kitechen/addMenu/"+this.props.account.id
      axios.post(path,data).then( res=>{

      if(res.data==0){
          console.log("Menu with the same title does exist")
      }

      else{
          this.onImageUpload(id)

        console.log("status code"+res.data)
      }
          
       
      });


}


    render(){
        return(
          <Paper>
            <div className="container card">
            
               <div className="setMargin">
  
                                <h3>Add a Menu!</h3>
                      <div class="form-group">
                      <Paper>
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" class="form-control"  aria-describedby="Add title" placeholder="Title" ref="title"/>
                        <small id="emailHelp" class="form-text text-muted">Please enter your title for your service!</small>
                        </Paper>
                      </div>
                      <div class="form-group">
                        <Paper>
                        <label for="discription">Discription</label>
                        <textarea  class="form-control" id="exampleInputPassword1" placeholder="Discription" ref="desc">
                          </textarea>

                        
                        <small id="emailHelp" class="form-text text-muted">Please tell us about your kitchen!</small>
                        </Paper>
                      </div>


                      <div class="form-group">
                        <Paper>
                        <label for="exampleInputEmail1">price</label>
                        <input type="text" class="form-control"  aria-describedby="price" placeholder="price" ref="price"/>
                        <small id="emailHelp" class="form-text text-muted">Plase enter the price in ETB</small>
                        </Paper>
                         </div>

                      <div class="form-group">
                        <Paper>
                        <label for="file">Menu Type</label>
                        <select  class="form-control" id="type" ref="type" > 
                            <option selected> FASTING</option>
                            <option> BREAKFAST</option>
                            <option>LUNCH</option>
                            <option> BEVERAGE</option>
                            <option> DESSERT</option>
                            <option>DINNER</option>
                            <option>PIZZA</option>
                            <option> CHICKEN</option>
                            <option> FISH</option>
                            <option>BEEF</option>
                            <option>BURGER</option>
                        </select>
                        <small id="emailHelp" class="form-text text-muted">please select your Menu type!!</small>
                        </Paper>
                      </div>

                      <div class="form-group">
                        <Paper>
                        <label for="file">Picture</label>
                        <input  type="file" class="form-control" id="file" placeholder="Picture" ref="image" onChange={this.onFile}/>
                        <small id="emailHelp" class="form-text text-muted">Upload a picture for your Menu!!</small>
                        </Paper>
                      </div>

      
          <button  onClick={this.addMenu} class="btn btn-primary ">Add Menu</button>
                
</div>


</div>
</Paper>
            
        );
    }

}

const mapStateToProps= (state) =>{

  return {
    account:state.account
  }
}

export default connect(mapStateToProps) (AddKMenu)