import React from "react";
import '../styles/Register.css';
class Register extends React.Component {
    constructor(props) 
        {
            super(props);
            this.state = {
                name: "hello world"
            };
        }
    handleChange = (event) =>
    {
        //console.log(event.target.value);
        this.setState({ name : event.target.value});
    }
    render(){     
    return(
    <div className="container-fluid background py-5 ">
    <div className="row justify-content-center">
    <div className="col-5">
        <h1 style={{"color":"white"}}>Registration</h1>
    </div>
   
            <form className="col-8">
                <input type="text" onChange={this.handleChange} className="form-control" placeholder="name" id="name" name="name"/>
                <input type="email" className="form-control" placeholder="email" id="name" name="name"/>
                <input type="number" className="form-control" placeholder="phone" id="name" name="name"/>
                <input type="number" className="form-control" placeholder="age"/>
                <label style={{"color":"white"}}>Gender</label>
                <input type="radio" className="form-check-input" name="gender" value="male"/>
                <label style={{"color":"white"}}>Male</label>
                <input type="radio" className="form-check-input" name="gender" value="female"/>
                <label style={{"color":"white"}}>Female</label>
                <input type="radio" className="form-check-input" name="gender" value="others"/>
                <label style={{"color":"white"}}>Others</label>
                <input type="number" className="form-control" placeholder="pin"/>
                <br/>   
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
    )}
}
export default Register