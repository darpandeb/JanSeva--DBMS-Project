import React from "react";
import "../styles/Header.css";

class Header extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
            title : "JanSeva"
        }
    }
        render() {
            return (
                <>
                    <nav className="navbar navbar-dark navbar-color">
                     <div className="container-fluid">
                    <a className="navbar-brand brand">{this.state.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end bg-dark text-light navbar-color " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title  brand" id="offcanvasDarkNavbarLabel">{this.state.title}</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </nav>
        </>

        )}
}
export default Header
// const Header =()=>
// {
//     return(
//         <>
//             <nav class="navbar navbar-dark navbar-color">
//             <div class="container-fluid">
//             <a class="navbar-brand brand">JanSeva</a>
//             <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
//             <span class="navbar-toggler-icon"></span>
//             </button>
//             <div class="offcanvas offcanvas-end bg-dark text-light navbar-color " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
//             <div class="offcanvas-header">
//                 <h5 class="offcanvas-title  brand" id="offcanvasDarkNavbarLabel">JanSeva</h5>
//                 <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//             </div>
//             <div class="offcanvas-body">
//                 <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
//                 <li class="nav-item">
//                     <a class="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//                 <li class="nav-item">
//                     <a class="nav-link" href="#">Link</a>
//                 </li>
//                 </ul>
//             </div>
//             </div>
//         </div>
//         </nav>
//     </>
//     )
// }

