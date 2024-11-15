import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Banner from './components/Crousel/Banner';
import Footer from "./components/footer/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Banner />
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
                <Footer />
            </Router>

        </div>
    );
};

export default App;
