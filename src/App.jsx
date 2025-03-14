import React from 'react';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home';
import Branding from "./pages/branding/Branding"
import LogoAndBrand from './pages/logo and brand guidelines/LogoAndBrand';
import PackagesDesign from './pages/packagesDesign/PackagesDesign';
import DigitalMarketing from './pages/digitalMarketing/DigitalMarketing';
import CompetetiveAnalysis from './pages/competetiveAnalysis/CompetetiveAnalysis';
import MarketingAutomation from './pages/marketingAutomation/MarketingAutomation';
import EmailMarketing from './pages/emailMarketing/EmailMarketing';
import ChatBot from './pages/chatBot/ChatBot';
import ContentCreationMaintenance from './pages/contentCreationMaintenance/ContentCreationMaintenance';
import PPCs from './pages/ppc/PPCs';
import SEOs from './pages/seo/SEOs';
import LeadGeneration from './pages/leadGeneration/LeadGeneration';
import InsightsAnalytics from './pages/insightsAnalytics/InsightsAnalytics';
import FacebookAds from './pages/facebookAds/FacebookAds';
import InstagramAds from './pages/instagramAds/InstagramAds';
import Linkdin from "./pages/linkdin/Linkdin"
import Youtube from './pages/youtube/Youtube';
import SocialMediaManegement from './pages/socialMediaMangement/SocialMediaManegement';
import CommunityManagement from './pages/communityManagement/CommunityManagement';
import InfluencerMarketing from './pages/influencerMarketing/InfluencerMarketing';
import PhotographyVideograpy from './pages/photographyVideograpy/PhotographyVideograpy';
import Contact from './components/contact/Contact';
import WebDesignDevelopment from './pages/webDesignDevelopment/WebDesignDevelopment';
import MobileAppDevelopment from './pages/mobileAppDevelopment/MobileAppDevelopment';
import Cro from './pages/cro/Cro';
import Coa from './pages/coa/Coa';
import UserInterfaceDesign from './pages/userInterfaceDesign/UserInterfaceDesign';
import WebOptimization from './pages/webOptimization/WebOptimization';
import PortfolioDetailPage from './components/portfolioDetailPage/PortfolioDetailPage';
import Education from './pages/education/Education';
import Ecommerce from './pages/ecommerce/Ecommerce';
import Healthcare from './pages/healthcare/Healthcare';
import OurClientsPage from './pages/ourClientsPage/OurClientsPage';
import Careers from './pages/careers/Careers';
import About from './pages/about/About';
import Podcast from './pages/podcast/Podcast';
import Blog from './pages/blog/Blog';
import CaseStudyDetail from './components/caseStudyDetail/CaseStudyDetail';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/case-study/:id" element={<CaseStudyDetail />} />
                    <Route path='/branding' element={<Branding />} />
                    <Route path='/logo-and-brand-guidelines' element={<LogoAndBrand />} />
                    <Route path='/packaging-design' element={<PackagesDesign />} />
                    <Route path='/digital-marketing-agency-in-dubai' element={<DigitalMarketing />} />
                    <Route path='/competitive-analysis' element={<CompetetiveAnalysis />} />
                    <Route path='/marketing-automation' element={<MarketingAutomation />} />
                    <Route path='/email-marketing' element={<EmailMarketing />} />
                    <Route path='/chatbots-live-chat' element={<ChatBot />} />
                    <Route path='/content-creation-and-maintenance' element={<ContentCreationMaintenance />} />
                    <Route path='/ppc-management-agency' element={<PPCs />} />
                    <Route path='/seo-agency-in-dubai' element={<SEOs />} />
                    <Route path='/lead-generation-agency' element={<LeadGeneration />} />
                    <Route path='/insights-and-analytics' element={<InsightsAnalytics />} />
                    <Route path='/facebook-ads' element={<FacebookAds />} />
                    <Route path='/instagram-ads' element={<InstagramAds />} />
                    <Route path='/linkedin-ads' element={<Linkdin />} />
                    <Route path='/youtube-ads' element={<Youtube />} />
                    <Route path='/social-media-agency-in-dubai' element={<SocialMediaManegement />} />
                    <Route path='/community-management' element={<CommunityManagement />} />
                    <Route path='/influencer-marketing' element={<InfluencerMarketing />} />
                    <Route path='/photography-and-videography' element={<PhotographyVideograpy />} />
                    <Route path='/web-design-agency-in-dubai' element={<WebDesignDevelopment />} />
                    <Route path='/mobile-app-design' element={<MobileAppDevelopment />} />
                    <Route path='/conversion-rate-optimization' element={<Cro />} />
                    <Route path='/conversion-optimization-audit' element={<Coa />} />
                    <Route path='/ux-ui-design' element={<UserInterfaceDesign />} />
                    <Route path='/website-optimization' element={<WebOptimization />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/our-portfolio' element={<PortfolioDetailPage />} />
                    <Route path='/education-marketing-agency' element={<Education />} />
                    <Route path='/ecommerce-marketing-agency' element={<Ecommerce />} />
                    <Route path='/healthcare-marketing-agency' element={<Healthcare />} />
                    <Route path='/clients' element={<OurClientsPage />} />
                    <Route path='/careers' element={<Careers />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='/masters-of-marketing-podcast' element={<Podcast />} />
                    <Route path='/blog' element={<Blog />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
