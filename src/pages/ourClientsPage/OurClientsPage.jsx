import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from '../../components/carousel/Carousel';
import client1 from '/public/assets/images/ourclients1.png';
import client2 from '/public/assets/images/ourclients2.svg';
import client3 from '/public/assets/images/ourclients3.svg';
import client4 from '/public/assets/images/ourclients4.jpg';
import client5 from '/public/assets/images/ourclients5.svg';
import client6 from '/public/assets/images/ourclients6.png';
import client7 from '/public/assets/images/ourclients7.png';
import client8 from '/public/assets/images/ourclients8.jpg';
import client9 from '/public/assets/images/ourclients9.svg';
import client10 from '/public/assets/images/ourclients10.svg';
import client11 from '/public/assets/images/ourclients11.svg';
import client12 from '/public/assets/images/ourclients12.png';
import client13 from '/public/assets/images/ourclients13.svg';
import client14 from '/public/assets/images/ourclients14.svg';
import client15 from '/public/assets/images/ourclients15.svg';
import client16 from '/public/assets/images/ourclients16.svg';
import client17 from '/public/assets/images/ourclients17.svg';
import client18 from '/public/assets/images/ourclients18.png';
import client19 from '/public/assets/images/ourclients19.png';
import client20 from '/public/assets/images/ourclients20.png';
import client21 from '/public/assets/images/ourclients21.svg';
import client22 from '/public/assets/images/ourclients22.svg';
import client23 from '/public/assets/images/ourclients23.png';
import client24 from '/public/assets/images/ourclients24.png';
import BookConsultation from '../../components/bookConsultation/BookConsultation';

const OurClientsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const allClients = [
        client1, client2, client3, client4, client5, client6,
        client7, client8, client9, client10, client11, client12,
        client13, client14, client15, client16, client17, client18,
        client19, client20, client21, client22, client23, client24,
    ];

    const createRows = (clientsArray, itemsPerRow) => {
        const rows = [];
        for (let i = 0; i < clientsArray.length; i += itemsPerRow) {
            rows.push(clientsArray.slice(i, i + itemsPerRow));
        }
        return rows;
    };

    const rows = createRows(allClients, 4);

    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <>
            <Carousel
                heading="Clients"
                breadcrumb="Home | Clients"
            />

            <h1 className="about-heading">OUR CLIENTS</h1>

            <div className="brandingAgency-process-seperater2"></div>

            <div className="brandingAgency-clients">
                <div className="ourclients" style={{borderTop:"none"}}>
                    <Container>
                        {rows.map((row, rowIndex) => (
                            <Row key={rowIndex}>
                                {row.map((client, colIndex) => (
                                    <Col sm={6} md={6} lg={3} key={colIndex}>
                                        <div className="image-box">
                                            <img src={client} alt={`Client ${rowIndex * 4 + colIndex + 1}`} />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        ))}
                    </Container>
                </div>
            </div>
            <BookConsultation />
        </>
    )
}

export default OurClientsPage