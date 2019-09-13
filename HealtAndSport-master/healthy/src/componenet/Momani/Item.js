import React, { Component } from 'react';
import axios from 'axios';
import Comment from './Comment'

class Item extends Component {
  state = { comment: "", i: "", counter: 0, view: false }

  addcomment = (e) => {

    this.setState({ comment: e.target.value })
  }
  mynewcomment = (id) => {

    axios.put(`http://localhost:9000/Momani/newcomment/${this.state.comment}/${id}`)
      .then(res => {
        this.setState({ i: res.data, comment: "" })


      })

  }

  flag = () => {
    let i = this.state.counter + 1

    this.setState({ counter: i, model: !this.state.model })
  }

  view = () => {

    if (this.props.post.comment.length >= 0)
      this.setState({ view: !this.state.view })

  }

  render() {

    return (

      <>
        {this.state.counter < 5 ?
        <div className="container">
          <div className="row">
            <div className="card" style={{ width: '100%' }}>
              <div className="card-body" style={{border: "1px solid green", borderRadius:"20px"}}>
                {/* ....................flag.............. */}
     


{/* .........................flag................ */}


                <h5 className="card-title" style={{fontFamily:"Amaranth"}}>{this.props.post.post}</h5>

                <button  onClick={this.view} style={{backgroundColor:"#0f9e42",borderColor:"#0c3f0b", borderRadius:"5px",width:'10%',padding:"10px",fontFamily:"Amaranth" ,color:"white"}}>comments</button>
                <div>
                  {this.state.view && this.props.post.comment.map((elem, i) =>
                    <Comment elem={elem} key={i} />)}

                  {this.props.post.comment.length === 0 && this.state.view && <p style={{color:"red",fontFamily:"Amaranth"}}>No Comments yet</p>}


                  <div class="input-group">
                    {this.state.view && <input className="form-control" value={this.state.comment} onChange={this.addcomment.bind(this)}  style={{ width: "30%", border:"2px  solid green", borderRadius: "3px"}}></input>}
                    <div class="input-group-append">
                      {this.state.view && <button onClick={this.mynewcomment.bind(this, this.props.post._id)} style={{backgroundColor:"#0f9e42",borderColor:"green", borderRadius:"3px", margin:"1px" ,fontFamily:"Amaranth",color:"white"}}> Add comment</button>
                      }
                    </div>
                  </div>

                </div>
              
              </div>
            </div>
            </div>
          {this.state.i.length > 0 && this.props.updatecomment()}
          </div>
          : ""}


<div className="container">
 {this.state.counter<5&&<button type="button"  onClick={this.flag} className="btn btn-danger btn-lg" data-toggle="modal" data-target="#myModal"style={{margin:"10px 1020px", fontFamily:"Amaranth"}}>Report</button>}
 <div className="modal fade" id="myModal" role="dialog">
   <div className="modal-dialog">
   
     <div className="modal-content">
       <div className="modal-header">
         <button type="button" className="close" data-dismiss="modal">&times;</button>
         <h4 className="modal-title" style={{fontFamily:"Amaranth" }}>Reporte Message</h4> <img style={{maxWidth:'30px', maxHeight:'30px'}} src={require('../Assets/envelope.svg')}></img>
       </div>
       <div className="modal-body" style={{fontFamily:"Amaranth" }}>
         <h5>Thank you for submitting  a Report</h5>
       </div>
       <div className="modal-footer">
         <button onClick={this.model} type="button" className="btn btn-danger" data-dismiss="modal" style={{fontFamily:"Amaranth" }}>Close</button>
       </div>
     </div>
     
   </div>
 </div>
 
</div>

        





      </>
    );



  }

}
export default Item