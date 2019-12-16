import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Axios from "axios"
import { connect } from "react-redux"

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
 class ShowMenu extends React.Component{

   
    constructor(){
        super()
        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(){
        let data={
            title:this.props.menu.title
        }

        let path="http://localhost:1234/kitechen/delete/"+this.props.account.id;
            Axios.post(path,data).then( res => {
                let newMenus=[]
                    if(res.data==1){
                        this.props.menus.map( element => {
                                if(!(element.title===this.props.menu.title))
                                newMenus.push(element)
                        })
                    }


                    let action={
                        type:"ACTION_MENUS",
                        menus:newMenus
                    }

                    this.props.dispatch(action)
            })

            
        }

    render(){
      
        return(
           

            <Card className={useStyles.card}>
      <CardActionArea>
        <CardMedia
          className={useStyles.media}
          image={`http://localhost:1234/image/download/${this.props.menu.id}`}
          title="Contemplative Reptile"
        >

            <img  className="img-fluid" src={`http://localhost:1234/image/download/${this.props.menu.id}`}/>

            </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {this.props.menu.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {this.props.menu.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button onClick={this.onDelete} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>





            /*

                    <div class="card">
                        <img class="card-img-top img-fluid" src={`http://localhost:1234/image/download/${this.props.menu.id}`} alt="Card image cap"/>

                        <div class="card-body">
                            <h5 class="card-title"><b>Title:</b>{this.props.menu.title}</h5>
                            <p class="card-text">{this.props.menu.description}</p>
                            <h6><b>Type:</b>{this.props.menu.menuType}</h6>
                            <h6><b>Price:</b>{this.props.menu.price}</h6>

                        
                        <div className="card-fotter row">
                        <div className="col-md-6">
                        <button class="btn btn-block btn-warning">Edit</button>
                        </div>
                        
                        <div className="col-md-6">
                        <button onClick={this.onDelete} class="btn btn-block btn-danger">Delete</button>
                        </div>
                        </div>
                        </div>
                        </div>

                        */

                  
        );

    }
}

const mapStateToProps= (state) =>{

    return {
        menus:state.menus,
        account:state.account
    }

}

const mapDispatcherToProps = (dispacher) =>{

    return {
        dispatch: (action) =>{
                dispacher(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatcherToProps) (ShowMenu)