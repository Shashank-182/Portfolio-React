import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home';
import About from './Components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Components/services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
    return (
        <Router>
            <>
                <NavigationBar /> {/* This ensures the navbar is always shown */}
                <div id = 'Home'></div>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />


                </Routes>
                <div id = 'About'><About/></div>
                <div id = 'Services'><Services/></div>
                <div id='Contact'><Contact/></div>
                <Footer/>
            </>
        </Router>
    );
}

export default App;
