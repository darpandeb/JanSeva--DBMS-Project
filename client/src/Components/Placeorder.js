import React, { Component, useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import '../styles/Placeorder.css';
export default function Placeorder() {
  const packID = localStorage.getItem('packID');
  const pilgID = localStorage.getItem('pilgID');
  const url = `http://localhost:8000/placeorder?pilgID=${pilgID}&packID=${packID}`
  let imgurl ='https://i.ibb.co/60cQ7dv/Paytm-logo.png'
  const [ordersummary, setOrdersummary] = useState("")

  useEffect(() =>
     {
        fetch(url,{method:'GET'} )
        .then((res) => res.json())
        .then((data) => {
          setOrdersummary(data)
        })
     });
  const renderSummary = (data) => {
    if(data){
      return data.map((item) => {
          const total = 1200 + item.packCost;
          return(
            <div className='row justify-content-center'>
            <div className='col-12 col-sm-10 col-md-10 ordrsummary orderback'>
            
                  <h1 className='ordersum' style={{"fontSize":"40px","color":"black"}}>ORDER SUMMARY &nbsp;<i class="bi bi-box2-heart-fill"></i></h1>
                  <hr/>
                  <p className='orderdesp'><span className='title'>Pilgrimage Name :</span> {item.pilgName} , {item.pilgLoc}, {item.pilgCity}, {item.pilgPin}</p>
                  <p className='orderdesp'><span className='title'>Package Name :</span> {item.packName}</p>
                  <p className='orderdesp' style={{"fontSize":"21px"}} ><span className='title'>Package Cost :</span> Rs {item.packCost}</p>

                  

                  <h2 className='ordersum' style={{"fontSize":"40px","color":"black",'paddingTop':'2rem'}}>Total Amount <i class="bi bi-currency-rupee"></i> </h2>
                  <hr/>
                  <p className='orderdesp'> Pilgrimage Charges :  Rs 500.00</p>
                  <p className='orderdesp'> Priest Charges : Rs 500.00</p>
                  <p className='orderdesp'> Package Charges : Rs {item.packCost}.00</p>
                  <p className='orderdesp'> Service and Delivery Charges : Rs 200.00</p>
                  <hr/>
                  <p className='orderdesp'> Total : Rs {total}.00</p>


                  <button className='btn btn-primary'>Pay</button>
                  <hr/>
                  <h5 style={{'textAlign': 'center'}}>Payment's Partner</h5>
                  <div className='row justify-content-center'>
                    <div className='col-2'>
                    <img className='img-fluid' src={imgurl} />
                    </div>
                  </div>
                  

                  
            </div>
            </div>
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
          {/*Payment*/}



          <div className='container my-5'>
                  {renderSummary(ordersummary)}
          </div>


    </>
  )
}
