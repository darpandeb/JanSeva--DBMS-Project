import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
import '../styles/Login.css';



export default function Register() {
  return (
    <>
        {/*Navigation*/}
        <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <Link class="navbar-brand brand" >Janseva</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="bi bi-list" style={{color:"white"}}></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{scrollHeight: "100px"}}>
                            <li class="nav-item">
                            <Link class="nav-link brand" to="/about">About Us</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                  </nav>
        {/*Register*/}

    </>
  )
}



