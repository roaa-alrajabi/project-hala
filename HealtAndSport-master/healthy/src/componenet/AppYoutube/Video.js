import React, { Component } from 'react'


export class Video extends Component {


    render() {

        return (
      
            <>

            <div className="col-md-4 ">
            <div className="grid-container" >
            <div className=" grid-item" >
                    <div className = " mb-4 shadow-lg card" >

                        <div className = "card-body" style={{fontFamily:"Amaranth"}} >

                            <h4 className = "text-center mb-4 top_title_vid" >
                                
                                    {this.props.vid.snippet.title}
                                
                            </h4 >

                                <iframe 
                                
                                width="100%" 
                                
                                height="300px" 

                                title="show" 
                                // display="inline"
                                // border= "2px green  solid" 
                                // borderRadius= '2px' 
                                
                                src= {`//www.youtube.com/embed/${this.props.vid.id.videoId}`}  allowFullScreen ></iframe>


                                    <p className = "text-center mb-4 descrip_vide">
                                     
                                     {this.props.vid.snippet.description}
                                     
                                     </p>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default Video