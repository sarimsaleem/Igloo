import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Branding from "./pages/branding/Branding"
import LogoAndBrand from './pages/logo and brand guidelines/LogoAndBrand';
import PackagesDesign from './pages/packagesDesign/PackagesDesign';
const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/branding' element={<Branding />} />
                    <Route path='/logo-and-brand-guidelines' element={<LogoAndBrand />} />
                    <Route path='/packaging-design' element={<PackagesDesign />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
