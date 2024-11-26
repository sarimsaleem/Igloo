import React from 'react'
import Carousel from './carousel/Carousel'
import ChatbotMarketing from './chatbotMarketing/ChatbotMarketing'
import EnhanceChatbot from './enhanceChatbot/EnhanceChatbot'
import CustomerExperiance from './customerExperiance/CustomerExperiance'
import StillHaveAQuestion from '../marketingAutomation/stillHaveAQuestion/StillHaveAQuestion'
import Bounce from '../../pages/home/bounce/Bounce'
import BookConsultation from '../../pages/home/bookConsultation/BookConsultation'
import Faqs from '../../pages/logo and brand guidelines/faqs/Faqs'
import LastInsight from '../../pages/logo and brand guidelines/lastInsight/LastInsight'
import ChatBotServices from './chatbotServices/ChatBotServices'
const ChatBot = () => {
    return (
        <>
            <Carousel />
            <ChatbotMarketing />
            <EnhanceChatbot />
            <CustomerExperiance />
            <ChatBotServices />
            <StillHaveAQuestion />
            <Bounce />
            <BookConsultation />
            <Faqs />
            <LastInsight />
        </>
    )
}

export default ChatBot