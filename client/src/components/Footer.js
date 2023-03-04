import React from "react";
import '../styles/Footer.css';

const Footer = (props) =>{
    console.log(props)
    return (
        <>
            <div className="container-fluid ">
                <div className="row justify-content-center back">
                    <div className="col-5 col-xs-5 col-sm-4 col-md-4 col-lg-4 col-xl-3 pt-1 px-lg-5 ">
                        <h3>&copy; JanSeva {props.year}</h3>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Footer;