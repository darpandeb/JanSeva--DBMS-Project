import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';

import '../styles/ViewOrders.css';

const now = new Date();
const year = now.getFullYear();
const custID = localStorage.getItem('ltk');
const viewOrdersurl = `http://localhost:8000/vieworders/${custID}`;


export default function ViewOrders() {

  const [orders, setOrders] = useState("");

  useEffect(() =>
     {
        fetch(viewOrdersurl,{method:'GET'} )
        .then((res) => res.json())
        .then((data) => {
            setOrders(data)
        })
    }, [])

    const handlecancel = () => {

    }

    const renderorders = (data) =>{
        if(data.length > 0){
            return data.map((item) => {
                return(
                <>
                <tr>
                    <td data-th="Order ID">
                    {item.orderID}
                    </td>
                    <td data-th="Pilg Name">
                    {item.pilgName}
                    </td>
                    <td data-th="Pack Name">
                    {item.packName}
                    </td>
                    <td data-th="Order Time">
                    {item.orderTime}
                    </td>
                    <td data-th="Order status">
                    {item.orderStatus}
                    </td>
                    <td data-th="Net Amount">
                    Rs {item.amount}
                    </td>
                    <td><button className='btn btn-success'>View</button>&nbsp;
                    <button className='btn btn-danger' onClick={handlecancel}>Cancel</button>
                    </td>
                </tr>
                </>
                )
            })
        }
        else{
            return(
                <>
                    <tr>
                       <td colSpan={7} style={{'textAlign':'center'}}>No Orders made so far!!!</td>
                    </tr>
                </>
            )
        }
    }


  return (
   <>
    <Navigation/>
    <div className='container'>
       <div className='row back_order'>
        <div className='col-12'>
            <h1 className='orderhead'> Order History </h1>
            <div class="container">
            <table class="rwd-table mb-5">
                <tbody>
                <tr>
                    <th>Order ID</th>
                    <th>Pilgrimage Name</th>
                    <th>Package Name</th>
                    <th>Order Time</th>
                    <th>Order Status</th>
                    <th>Net Amount</th>
                    <th>Actions</th>
                </tr>
                {renderorders(orders)}
                </tbody>
            </table>
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
