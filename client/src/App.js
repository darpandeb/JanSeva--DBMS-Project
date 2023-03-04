import React from 'react';
import Header from './components/Header';
import Register from './components/Register';
import Footer from './components/Footer'; 


const App = () =>{
    const now = new Date();
    const year = now.getFullYear();
    return (
      <>
        <Header/>
        <Register/>
        <Footer year={year}/>
      </>
    )
  }

export default App;