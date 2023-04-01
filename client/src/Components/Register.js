import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import '../styles/Login.css';


const registerurl = 'http://localhost:8000/registration'

function validateEmailAndPassword(name, age, gender, email, address,pin,password) {
  // Email regex pattern to match a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Check if email and password are empty
  if (!email || !password || !name || !age || !gender || !address || !pin ) {
    return false;
  }
  
  //Check if email is valid
  if (!emailRegex.test(email)) {
    return false;
  }
  
  // If both email and password are valid, return true
  return true;
}

export default function Register() {
  const nav = useNavigate();
  const [auth, setAuth] = useState(
  {
    name:'',
    age: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    pin: '',
    password: '',
    message: ''
  })


    const handleSubmit = () => {
      if(validateEmailAndPassword(auth.name,auth.age,auth.gender,auth.email,auth.address,auth.pin,auth.password)){
      fetch(registerurl,{
          method:'POST',
          headers:{
              'accept':'application/json',
              'Content-type':'application/json'
          },
          body:JSON.stringify(auth)
      })

      .then((res) => res.json())
      .then((data) => {
          if(data.auth ===  false){
              // this.setState({message:data.token});
              setAuth(existingValues => ({...existingValues,
                  message:data.status,
              }))
          }else{
              setAuth(existingValues => ({...existingValues,
                  message:data.status,
              }))
              //localStorage.setItem('ltk',data.token)
              alert("Registration success");
              nav('/login');
              // this.props.history.push('/')
          }
      })
    }
    else
    {
        alert("Registration failure due to invalid credentials. Try again!");
    }
  }
 
  const handleChange = (e) => {
      const fieldName = e.target.name
      setAuth(existingValues => ({
        ...existingValues,
        // update the current field
        [fieldName]: e.target.value,

      }))
      
    }

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
                            <Link class="nav-link brand" to="/about">About Us</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                  </nav>
        {/*Register*/}
        <div className="container login-back rounded">
                
                <br/>
                <div className="panel panel-success">
                    <div className="panel-heading login-head">
                        Register
                    </div>
                    <div className="panel-body">
                        <h3 style={{color:'red'}}>{auth.message}</h3>
                        <div className="row">
                            <div className="col-md-12">
                            <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" name="name"
                                        value={auth.name} onChange={handleChange} type="text"/>
                                    </div>
                                </div>
                               
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Gender:</label>
                                          <br />
                                          <input className="form-check-input"  type="radio" id="male" name="gender" value='M'  onClick={handleChange} />
                                          &nbsp;<label htmlFor="male">Male</label> &nbsp;&nbsp;
                                          <input className="form-check-input" type="radio" id="female" name="gender" value='F' onClick={handleChange} />
                                          &nbsp;<label htmlFor="female">Female</label>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input className="form-control" name="age"
                                        value={auth.age} onChange={handleChange} type="number"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" name="email"
                                        value={auth.email} onChange={handleChange} type="text"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Phone No</label>
                                        <input className="form-control" name="phone"
                                        value={auth.phone} onChange={handleChange} type="number"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input className="form-control" name="address"
                                        value={auth.address} onChange={handleChange} type="text"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Pincode</label>
                                        <input className="form-control" name="pin"
                                        value={auth.pin} onChange={handleChange} type="number"/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="form-group">
                                        <label>Set a Password</label>
                                        <input className="form-control" name="password"
                                        value={auth.password} onChange={handleChange} type="password"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mt-5">

                            <button className="btn btn-success" style={{'padding':'0.5rem 4rem 0.5rem 4rem'}} onClick={handleSubmit}>
                                Register
                            </button>
                            &nbsp;
                            <Link to="/login" className="btn btn-primary py-2 px-3" >Already a user? Login</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}



