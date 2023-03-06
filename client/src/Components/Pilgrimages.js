import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import '../styles/Pilgrimages.css';
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
                <div className="row px-3 py-5">
                    <div className="col-12 col-sm-5 col-lg-4  filters rounded">
                        <h3> Filters  Section</h3>
                        <p> prepare the backend first</p>
                    </div>
                    </div>
                </div>
      </>
    )
  }
}
