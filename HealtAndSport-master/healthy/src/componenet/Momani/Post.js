import React ,{Component}from 'react';
import axios from 'axios';
import Item from './Item';
import NavBar from '../Roaa/NavBar';
import Footer from '../Roaa/Footer';

class Post extends Component{
  state={post:"",chat:"",i:""}
  
  updatecomment=()=>{
    axios.get(`http://localhost:9000/Momani/get`)
     
    .then(res=>{ 
     this.setState({chat:res.data})
   })
  }

  writepost=(e)=>{
    
    this.setState({post:e.target.value})
  }
 
  addpost=()=>{
   
  axios.put(`http://localhost:9000/Momani/chat/${this.state.post}`)
  
 .then(res=>{ 
  this.setState({chat:res.data,post:""})
})
  }

  componentDidMount=()=>{
    axios.get(`http://localhost:9000/Momani/get`)
     
 .then(res=>{ 
  this.setState({chat:res.data})
})
  }

  render(){
 
   
  return (
    
  <>
   <NavBar/>
  <input value={this.state.post} onChange={this.writepost.bind(this)} style={{margin:"30px", width:"40%", border:"2px  solid green", borderRadius: "3px", padding:"10px"}}></input>
  <button onClick={this.addpost}  className="btn btn-success" style={{ Width: "60%", border:"2px solid green", borderRadius: "3px", fontFamily:"Amaranth" }}>Add Post</button>
  {this.state.chat.length>0&&this.state.chat.map((elem,i)=><Item post={elem} key={i} updatecomment={this.updatecomment} />)}
   <Footer/>
    </>
  );
}
}
export default Post;
