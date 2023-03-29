import React, { Component, useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import '../styles/Placeorder.css';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const order_id = Math.floor(Math.random()*100000);
const total_amount=1200;
    


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
        total_amount = 1200 + item.packCost;
          return(
            <>
                   
                  <hr/>
                  <h5 style={{'textAlign': 'center'}}>Payment's Partner</h5>
                  <div className='row justify-content-center'>
                    <div className='col-2'>
                    <img className='img-fluid' src={imgurl} />
                    </div>
                  </div>
                </>
                  
          )
        })
  }
}
const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };


// posting the payment request // 
const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:8000/payment',
        method: 'post',
        data: {
          amount: total_amount ,
          token,
        },
      });
      if (response.data.status === 'success') {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };


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
          <div className="panel panel-primary">
                    <div className="panel-heading">
                        Place Order
                    </div>
                    <div className="panel-body">
                        <form >
                        <div className="row">
                            <div className="col-md-12">
                            <div className="col-md-6">
                                    <div className="form-group">
                                        <label>OrderID</label>
                                        <input className="form-control" name="id"
                                        value='112233'/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label> Pilg Name</label>
                                        <input className="form-control" name="name"
                                        value="Kamakhya"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email"
                                        value="abc@gamil.com"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input className="form-control" name="phone"
                                        value="999776667"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control" name="address"
                                        value="abc some place"/>
                                    </div>
                                </div>
                            </div>
  
                            <div className="row">
                                <div className="col-md-12">
                                    <h2>Total Cost </h2>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" name="cost"
                                        value='1200'/>
                                    </div>
                                </div>
                                </div>
                            </div>
                            {/* <button className="btn btn-success"
                            type="submit">
                                Place order
                            </button> */}
                            
                        </div>
                        </form>

                        <StripeCheckout
                                stripeKey='pk_test_51MqgLVSG25tr98J4WPHHgCHrnNy8SCgWta9ozjZSqakWMJeKEKOKySaW2k8MNrizMwnd33hs5yu46APPmVlAjnbD00nbaoVhnS'
                                label="Place Order"
                                name = "Pay with cards"
                                billingAddress
                                shippingAddress
                                amount={total_amount}
                                description = {`Total amount: ${total_amount}`}
                                token={payNow}
                            />
                    </div>
                </div>
          </div>


    </>
  )
}
