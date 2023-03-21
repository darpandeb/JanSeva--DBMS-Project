import React from "react";
import Home from "./Components/Home";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Pilgrimages from "./Components/Pilgrimages";
import Packages from "./Components/Packages";
import Placeorder from "./Components/Placeorder";
import { BrowserRouter, Route, Routes } from "react-router-dom";


class App extends React.Component {

    render() {
        return(
            <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Landing/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/pilgrimage" element={<Pilgrimages/>}/>
                <Route path="/pilgrimage/:id" element={<Packages/>}/>
                <Route exact path="/placeorder" element={<Placeorder/>}/>
            </Routes>
            </BrowserRouter>
        )
}
}
export default App