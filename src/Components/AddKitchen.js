import React from "react"
import axios from "axios"
import { connect } from "react-redux";
class AddKitchen extends React.Component{

  constructor(){
    super();

    this.state={
      image:[],
      kitId:""
    }
    this.onSubmit=this.onSubmit.bind(this);
    this.onFile=this.onFile.bind(this)
    this.onImageUpload=this.onImageUpload.bind(this)

  }

  onFile(e){
    this.setState({
      image:e.target.files[0]
    })
    console.log(e.target.files[0])

  }


    onSubmit(){
 
        let title=this.refs.title.value;
        let desc=this.refs.desc.value;
        let type=this.refs.type.value;


        let data={
          "title":title,
          "descriptioin":desc,
          "type":type,
          "ownerId":this.props.account.id
        }

        axios.post("http://127.0.0.1:1234/kitechen/save",data).then(res=>{

        if(res.data.length>1)
        this.onImageUpload(res.data)

        });
         // this.onImageUpload();
        
  
    }

    onImageUpload(id){
      const formData=new FormData();
      formData.append("photo",this.state.image,this.state.image.name)

      let path="http://127.0.0.1:1234/image/upload/"+id
      
      axios.post(path,formData).then(res => {

      
      })
    }

    render(){
        return(
           
            <div className="container addKit ">
               
  
                
                <h2>Create Your Kitchen!</h2>
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
                        <input type="file" onChange={this.onFile} className="form-control" id="file" placeholder="Picture"/>
                        <small id="emailHelp" className="form-text text-muted">Upload a picture for your kitchen!!</small>
                      </div>




                      
                       
                      
                      <button onClick={this.onSubmit}  class="btn btn-primary">Create</button>
               

              </div>
            
                          
        );
    }

}
const mapStateToProps= (state) => {
  return {
    account:state.account
  }
}

export default connect(mapStateToProps) (AddKitchen)