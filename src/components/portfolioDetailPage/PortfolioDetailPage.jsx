import React, { useEffect, useState } from 'react';
import './portfolioDetailPage.css';
import { Image } from 'antd'; 
import portfolio1 from "../../../public/assets/images/portfolio1.jpg";
import portfolio2 from "../../../public/assets/images/portfolio2.jpg";
import portfolio3 from "../../../public/assets/images/portfolio3.jpg";
import portfolio4 from "../../../public/assets/images/portfolio4.jpg";
import portfolio5 from "../../../public/assets/images/portfolio5.jpg";
import portfolio6 from "../../../public/assets/images/homesec4-1.jpg";
import portfolio7 from "../../../public/assets/images/homesec4-2.jpg";
import portfolio9 from "../../../public/assets/images/homesec4-4.webp";
import portfolio10 from "../../../public/assets/images/homesec4-5.jpg";
import portfolio11 from "../../../public/assets/images/logoandbrand-portfolio-1.jpg";
import portfolio13 from "../../../public/assets/images/logoandbrand-portfolio-3.jpg";
import portfolio15 from "../../../public/assets/images/logoandbrand-portfolio-5.jpg";
import portfolio16 from "../../../public/assets/images/logoandbrand-portfolio-6.jpg";
import portfolio17 from "../../../public/assets/images/logoandbrand-portfolio-7.webp";
import portfolio18 from "../../../public/assets/images/fbAdsPort1.jpg";
import portfolio19 from "../../../public/assets/images/fbAdsPort2.jpg";
import portfolio20 from "../../../public/assets/images/fbAdsPort3.jpg";
import portfolio21 from "../../../public/assets/images/fbAdsPort4.jpg";
import portfolio22 from "../../../public/assets/images/fbAdsPort5.jpg";
import portfolio23 from "../../../public/assets/images/fbAdsPort6.jpg";
import portfolio24 from "../../../public/assets/images/webPortfolio1.jpg";
import portfolio25 from "../../../public/assets/images/webPortfolio2.jpg";
import portfolio26 from "../../../public/assets/images/webPortfolio3.jpg";
import portfolio27 from "../../../public/assets/images/webPortfolio4.jpg";
import Carousel from '../carousel/Carousel';

const portfolioImages = [
    portfolio1, portfolio17, portfolio3, portfolio4, portfolio5,
    portfolio6, portfolio7, portfolio9, portfolio10,
    portfolio11, portfolio13, portfolio15,
    portfolio16, portfolio2, portfolio18, portfolio19, portfolio20,
    portfolio21, portfolio22, portfolio23, portfolio24, portfolio25,
    portfolio26, portfolio27
];

const PortfolioDetailPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Carousel
                heading="PORTFOLIO"
                breadcrumb="Home | PORTFOLIO"
                imageUrl="seo-banner.jpg"
            />

            <h1 className='profolio-detail'>Portfolio</h1>

            <div className="portfolio-grid">
                {portfolioImages.map((image, index) => (
                    <div key={index} className="portfolio-item">
                        <Image
                            src={image}
                            alt={`Portfolio image ${index + 1}`}
                            preview={{
                                visible: isOpen && currentImageIndex === index,
                                onVisibleChange: (visible) => {
                                    if (!visible) {
                                        setIsOpen(false);
                                    }
                                },
                                src: portfolioImages[currentImageIndex],
                            }}
                            onClick={() => {
                                setCurrentImageIndex(index);
                                setIsOpen(true);
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioDetailPage;