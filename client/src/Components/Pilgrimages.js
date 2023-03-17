import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../styles/Pilgrimages.css';

const PilgrimageUrl = 'http://localhost:8000/pilgrimage';

const now = new Date();
const year = now.getFullYear();
export default class Pilgrimages extends Component {

  constructor(props)
   {
      super();

      this.state = {
        pilgrimages:''
      }
  }

  renderPilgrims = (data) => {
    if(data){
        return data.map((item) => {
            return(
                <>
                    <div className="col my-3" key={item.pilgID} >
                      <div className="card h-100 my-3">
                          <img src={`https://i.ibb.co/${item.img1}`} className="card-img-top h-100" alt="..."/>
                          <div className="card-body">
                            <h5 className="card-title">{item.pilgName}</h5>
                            <p className="card-text"><i className="bi bi-geo-alt-fill"></i> {item.pilgLoc} , {item.pilgCity} ,{item.pilgPin}</p>
                            <p className="card-text"><button type="button" className="btn btn-primary"><i className="bi bi-house-door-fill"></i> {item.pilgType} </button>
                             &nbsp; <button type="button" className="btn btn-warning text-light ">User Exp : {item.userExp} <i className="bi bi-star-fill"></i></button> &nbsp;</p>
                            <Link to ={`/pilgrimage/${item.pilgID}`} key={item.pilgID} className="btn btn-danger">View</Link>
                          </div>
                        </div>
                  </div>
                </>
            )
        })
    }
}
  render() {
    return (
      <>
            {/*Navigation*/}
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand brand" to='/home'>Janseva</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list" style={{color:"white"}}></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{scrollHeight: "100px"}}>
                        <li className="nav-item">
                        <Link className="nav-link active brand" to="/pilgrimage" >Pilgrimages</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link brand" to="/about">About Us</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            {/* Filters */}
            <div className="container">
                <div className="row  py-5">
                    <div className="col-12 filters rounded">
                        <h3> Filters  Section</h3>
                        <p style={{"color":"red"}}> !!!! Under Construction !!!!  </p>
                    </div>
                  </div>
                </div>

              {/* cards */}
              <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                  {this.renderPilgrims(this.state.pilgrimages)}
              </div>
          </div>
           {/*Footer*/}
           <div className="container-fluid ">
                    <div className="row justify-content-center">
                        <div className="col-5  col-md-3 col-lg-2">
                            <h3 className="brand foot">JanSeva &copy; {year}</h3>
                        </div>
                    </div>
            </div>
      </>
    )
  }
  componentDidMount(){
    console.log(">>>inside componentDidMount");
    fetch(PilgrimageUrl,{method:'GET'} )
    .then((res) => res.json())
    .then((data) => {
        this.setState({pilgrimages:data})
    })
}
}
