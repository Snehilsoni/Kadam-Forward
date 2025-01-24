import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Career from './component/Career';
import './App.css';



function App() {
  return (
    <>
      <div className="App">
        <Header />
          <Home />
          <Footer />
         </div>
          </>
        );
    }

export default App;