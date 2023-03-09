import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../styles/Pilgrimages.css';


const now = new Date();
const year = now.getFullYear();
export default class Pilgrimages extends Component {
  render() {
    return (
      <>
            {/*Navigation*/}
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <Link class="navbar-brand brand" to='/home'>Janseva</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="bi bi-list" style={{color:"white"}}></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{scrollHeight: "100px"}}>
                        <li class="nav-item">
                        <Link class="nav-link active brand" to="/pilgrimage" >Pilgrimages</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link brand" to="/about">About Us</Link>
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
                        <p> prepare the backend first</p>
                    </div>
                  </div>
                </div>

              {/* cards */}
              <div class="container">
              <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                  <div class="col my-3">
                      <div class="card h-100 my-3">
                          <img src="..." class="card-img-top" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          </div>
                        </div>
                  </div>
                  <div class="col my-3">
                      <div class="card h-100 mt-3">
                          <img src="..." class="card-img-top" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. Some more quick example text for the card's content.</p>
                          </div>
                        </div>
                  </div>
                  <div class="col my-3">
                      <div class="card h-100 my-3">
                          <img src="..." class="card-img-top" alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to make up the bulk of the card's content.</p>
                          </div>
                        </div>
                  </div>
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
}
