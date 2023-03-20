import React, { useState } from "react";
import {Link} from 'react-router-dom'
import '../styles/Home.css';

const now = new Date();
const year = now.getFullYear();
const PilgrimageUrl = 'http://localhost:8000/pilgrimage';
export default function Home() {


    // const [pilgrimages , setPilg]=useState('');
    const [input , setInput] = useState('');
    const [pilgrimages , setPilg] = useState('');

    const fetchData = (value) =>
    {
       fetch(PilgrimageUrl,{method:'GET'} )
       .then((res) => res.json())
       .then((data) => {
            const searchdata = data.filter((item)=>{
                return item && item.pilgName && item.pilgName.toLowerCase().includes(value);   
             })
             setPilg(searchdata);
            
       })

    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)

    }
    const renderPilgs = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    
                    <Link to ={`/pilgrimage/${item.pilgID}`}key={item.pilgID} value={item.pilgID} className='options'>
                        {item.pilgName} | {item.pilgLoc}
                    </Link>
                )
            })
        }
    }
    console.log(pilgrimages)

        return(
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

                {/*Search Bar */}

                <div className="container-fluid ">
                    <div className="row justify-content-center">
                        <div className="col-8 col-sm-7 col-md-4 col-lg-3">
                            <img src="https://i.ibb.co/zsGchyq/Jan-Seva-1.png" height="300px"/>
                        </div>
                        
                    </div>
                    <div className="row justify-content-center ">
                        <h3 className="brand col-12" style={{"fontSize":"40px","textAlign":"center"}}>Virtualising Pilgrimages</h3>
                        <div className="col-10 col-sm-6  col-lg-5 d-flex flex-column">
                            
                            <input type="text" onChange= {(e)=>handleChange(e.target.value)}  className="form-control rounded search" placeholder="Search your holy divine"/>
                            <br/>
                            <div className="searchdata">
                            {renderPilgs(pilgrimages)}
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blogs */}
                

                <div className="container-fluid ">
                    <div className="row justify-content-center">
                        <div className="col-2 col-sm-2 col-md-1">
                            <h1 className="blogs">Blogs</h1>
                        </div>
                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
                    <div class="col">
                        <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">Blog 1</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Voluptas deleniti, harum, 
                            magnam perspiciatis quae saepe obcaecati 
                            nesciunt tempora atque veniam culpa voluptates 
                            debitis impedit animi a eum ad quam autem, laboriosam 
                            ratione labore ab. At facilis illo ad blanditiis
                            delectus eaque minima, molestiae rerum, quidem nostrum, iste ex provident! Maxime!</p>
                           
                        </div>
                        <div className="card-footer">
                            <a href="#" class="btn btn-primary">View</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title brand1">Blog 2</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, illo dicta? Soluta, odit nam quaerat provident veniam minima accusantium facere molestiae in, dolorum rem reiciendis.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" class="btn btn-primary">View</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title brand1">Blog 3</h5>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, perferendis! Minus tempore et possimus, quasi dicta ullam sequi dolor, voluptatibus hic soluta praesentium odit! Id quae labore quisquam quis iure?</p>
                            
                        </div>
                        <div className="card-footer">
                            <a href="#" class="btn btn-primary">View</a>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title brand1">Blog 4</h5>
                            <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, perferendis! Minus tempore et possimus, quasi dicta ullam sequi dolor, voluptatibus hic soluta praesentium odit! Id quae labore quisquam quis iure?.</p>
                            
                        </div>
                        <div className="card-footer">
                            <a href="#" class="btn btn-primary">View</a>
                        </div>
                        </div>
                    </div>
                    </div>              
                </div>

            
                {/*Footer*/}
                <div className="container-fluid  ">
                    <div className="row justify-content-center">
                        <div className="col-5 col-sm-4 col-md-3 col-lg-2">
                            <h3 className="brand foot">JanSeva &copy; {year}</h3>
                        </div>
                    </div>
                </div>
                
            </>
        )

    }
