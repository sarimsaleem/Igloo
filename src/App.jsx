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
import DigitalMarketing from './digitalMarketing/digitalMarketing/DigitalMarketing';
import CompetetiveAnalysis from './digitalMarketing/competetiveAnalysis/CompetetiveAnalysis';
import MarketingAutomation from './digitalMarketing/marketingAutomation/MarketingAutomation';
import EmailMarketing from './digitalMarketing/emailMarketing/EmailMarketing';
import ChatBot from './digitalMarketing/chatBot/ChatBot';
import ContentCreationMaintenance from './digitalMarketing/contentCreationMaintenance/ContentCreationMaintenance';
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
                    <Route path='/digital-marketing-agency-in-dubai' element={<DigitalMarketing />} />
                    <Route path='/competitive-analysis' element={<CompetetiveAnalysis />} />
                    <Route path='/marketing-automation' element={<MarketingAutomation />} />
                    <Route path='/email-marketing' element={<EmailMarketing />} />
                    <Route path='/chatbots-live-chat' element={<ChatBot />} />
                    <Route path='/content-creation-and-maintenance' element={<ContentCreationMaintenance />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
