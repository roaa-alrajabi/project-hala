import React, { Component } from 'react'
export class SearchBar extends Component {
    state = {

        title: "",

        videos: ""

    }
    onChange = (e) => {

        this.setState({

            [e.target.name]: e.target.value

        })

    }
    render() {
        return (

            <div className="form-group" style={{  fontFamily:"Amaranth",  marginLeft: "30%"  , marginTop:"5%" }}>

                <h1 className=" text-center">
                <i className="fas fa-dumbbell fa-1x"/> Search for a workout
                </h1>

                <input



                    style={{ width: "400px",height:"35px", display: "inline", border: "2px green  solid", borderRadius: '2px', borderRadius:"5px",fontFamily:"Amaranth" ,color:"white"}}

                    type="text"

                    placeholder="search.."

                    name="title"

                    value={this.state.title}

                    onChange={this.onChange.bind(this)}

                />

                <button


                    onClick={this.props.find.bind(this, this.state.title)}

                    style={{ width: "100px",backgroundColor:"#0f9e42",borderColor:"#0c3f0b", borderRadius:"5px",fontFamily:"Amaranth" ,color:"white",marginTop:"-1%" }}

                    className="btn btn-success"

                    type="submit" >

                    Search

                    </button>
            </div>




        )
    }
}


export default SearchBar