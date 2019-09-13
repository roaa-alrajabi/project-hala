import React, { Component } from 'react'
import SearchBar from './SearchBar';
import Show from './Show'
import axios from 'axios';
import NavBar from '../Roaa/NavBar';
import Footer from '../Roaa/Footer';
export class AppTamimi extends Component {
    state = {
        item: "",
        number: "",
       
    }


    get = (e) => {
        e.preventDefault();
        console.log(e)
        const write = e.target.item.value;
        console.log(write.length)
        console.log(write)
       

        axios.get(`https://api.edamam.com/search?q=${write}&app_id=77d87f48&app_key=
        51d677ed63085c24fce0cf038ed04cd0&to=12&`)
            .then(res => {
                console.log(res.data.hits)
                    if(res.data.hits.length)
                    {
                        this.setState({
                        item: res.data.hits
                    })}
                
            })






    }



    componentDidMount = () => {
        axios.get(`https://api.edamam.com/search?q=diet and healthy&app_id=77d87f48&app_key=
            51d677ed63085c24fce0cf038ed04cd0&from=0&to=12&calories=591-722&health=alcohol-free&health=pork-free`)
            .then(res => {

                this.setState({
                    item: res.data.hits
                })
            })
            .catch(err => {
                console.log(err)
            })


    }





    render() {
        return (
          <>
           <NavBar/>
            <div style={{ fontFamily:'Amaranth' }}>
                <SearchBar get={this.get} />

<div class="container-fluid">
  <div class="row">
{this.state.item.length > 0 && this.state.item.map((item, index) => {
                    return (
                        <div className="col-md-4">
                        <div className="grid-container"  key={index}>
                            <div className=" grid-item" >
                            <div class="card-body"  >
                                <Show item={item} key={index} />
                            </div>
                           </div>
                        </div>
      </div>

                    )
                })}
 </div>
      </div>


  
     
            </div>
            <Footer/>
            </>
        )
    }
}

export default AppTamimi
