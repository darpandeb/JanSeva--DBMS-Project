import React from "react";
import Home from "./Components/Home";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Pilgrimages from "./Components/Pilgrimages";
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
            </Routes>
            </BrowserRouter>
        )
}
}
export default App