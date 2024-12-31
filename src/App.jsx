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
import SocialMediaManegement from './socialMedia/socialMediaMangement/SocialMediaManegement';
import CommunityManagement from './socialMedia/communityManagement/CommunityManagement';
import InfluencerMarketing from './socialMedia/influencerMarketing/InfluencerMarketing';
import SEOs from './mediaBuying/seo/SEOs';
import LeadGeneration from './mediaBuying/leadGeneration/LeadGeneration';
import InsightsAnalytics from './mediaBuying/insightsAnalytics/InsightsAnalytics';
import PPCs from './mediaBuying/ppc/PPCs';
import FacebookAdds from './mediaBuying/facebookAdds/FacebookAdds';
import InstagramAds from './mediaBuying/instagramAds/InstagramAds';
import Youtube from './mediaBuying/youtube/Youtube';
import Linkdin from "./mediaBuying/linkdin/Linkdin"

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
                    {/* <Route path='/competitive-analysis' element={<CompetetiveAnalysis />} />
                    <Route path='/marketing-automation' element={<MarketingAutomation />} />
                    <Route path='/email-marketing' element={<EmailMarketing />} />
                    <Route path='/chatbots-live-chat' element={<ChatBot />} />
                    <Route path='/content-creation-and-maintenance' element={<ContentCreationMaintenance />} />
                    <Route path='/social-media-agency-in-dubai' element={<SocialMediaManegement />} />
                    <Route path='/community-management' element={<CommunityManagement />} />
                    <Route path='/influencer-marketing' element={<InfluencerMarketing />} />
                    <Route path='/ppc-management-agency' element={<PPCs />} />
                    <Route path='/seo-agency-in-dubai' element={<SEOs />} />
                    <Route path='/lead-generation-agency' element={<LeadGeneration />} />
                    <Route path='/insights-and-analytics' element={<InsightsAnalytics />} />
                    <Route path='/facebook-ads' element={<FacebookAdds />} />
                    <Route path='/instagram-ads' element={<InstagramAds />} />
                    <Route path='/linkedin-ads' element={<Linkdin />} />
                    <Route path='/youtube-ads' element={<Youtube />} /> */}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
