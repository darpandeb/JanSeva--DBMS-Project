import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import '../styles/Packages.css';

export default function Packages() {
    const id = useParams()
    console.log(id.id);
    let PilgrimageUrl='http://localhost:8000/pilgrimage/'+id.id;

    const [pilgrimages,setPilgrimages] = useState("")

    useEffect(() => {
        fetch(PilgrimageUrl,{method:'GET'} )
        .then((res) => res.json())
        .then((data) => {
            setPilgrimages(data)
        })
      
    
    }, [])

    const renderPilgrims = (data) => {
        if(data){
        return data.map((item) => {
            return(
                <>
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={`https://i.ibb.co/${item.img2}`}  className="d-block  w-100 img-fluid" alt="..." height="200px"/>
                            </div>
                            <div className="carousel-item">
                            <img src={`https://i.ibb.co/${item.img1}`}  className="d-block w-100 img-fluid" alt="..." height="200px"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                         <div className="card mb-3" style={{"maxWidth": "100%", "maxHeight":"100%"}} key={item.pilgID}>
                            <div className="row g-0">
                                <div className="col-md-12">
                                <div className="card-body">
                                    <h5 className="card-title">{item.pilgName}</h5>
                                    <p className="card-text">{item.pilgName} dolor sit amet consectetur adipisicing elit. Assumenda non reprehenderit atque optio tempore, sunt eligendi delectus, similique incidunt quibusdam enim repellendus libero unde. Neque.</p>
                                    <p className="card-footer card-text" style={{"position":"relative",}}><small className="text-muted">{item.pilgLoc}, {item.pilgCity} , {item.pilgPin}</small></p>
                                </div>
                                </div>
                            </div>
                       </div> 
                </>
            )
        })
    }
}
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
                {/* Plgrimage details */}
                <div className='container my-5'>
                    <div className='row justify-content-center'>
                        <div className='col-12 col-md-8 pilgInfo' style={{"position":"relative"}}>
                            <h1 className='brand' style={{"fontSize":"45px"}}>Pilgrimage Informantion</h1>
                            {renderPilgrims(pilgrimages)}
                        </div>
                    </div>
                </div>
            </>
  )
}

