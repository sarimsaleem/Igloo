import React, { useEffect, useState } from 'react';
import "./careers.css";
import { Col, Container, Row } from 'react-bootstrap';

const Careers = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };
      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    return (
        <>
            <Container>
                <div className="career-header">
                    <h1>CAREERS</h1>
                    <p>HOME | CAREERS</p>
                </div>
            </Container>

            <div className="career-body">
                <div className="career-img-container">
                    <Container>
                        <Row>
                            <Col md={5} sm={5} xs={12}></Col>
                            <Col md={7} sm={7} xs={12}>
                                <div className="career-text-parent">
                                    <h1>WE LOVE WHAT WE DO</h1>
                                    <p>Igloo is a rapidly growing. We believe in creating an amazing working environment where people learn, grow, share ideas, and be creative. Join our team to help us promote brands, create amazing work, and make our clients successful.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="career-sub-body">
                <Container>
                    <Row>
                        <Col md={4}>
                            <div className="career-body-column1-parent">
                                <h4 className='career-body-column1-parent-heading'><span>01</span></h4>
                                <p className='career-body-column1-parent-data'>Sales Manager/Consultant EXPERIENCE: 2+ YEARS</p>
                                <button className='career-body-column1-parent-btn'><a href="">Apply Now</a></button>
                            </div>
                        </Col>
                        <Col md={8}>
                            <div className="career-body-column2-parent">
                                <h4 className='career-body-column2-parent-heading'>Overview</h4>
                                <p className='career-body-column2-parent-data'>
                                    Igloo Media is currently expanding its digital marketing/sales team and is looking for an experienced and talented digital media/marketing sales professional, to join our team, based out of Miami, FL or to work remotely. This is a fantastic growth opportunity to work with a growing international company.
                                </p>
                                <p className='career-body-column2-parent-data'>
                                    If you want to be part of the future of online sales/marketing and earn a solid income while working in a fast-paced, high-energy environment with a fast-growing digital media company, this is your opportunity.
                                </p>
                                <p className='career-body-column2-parent-data'>Location: Miami, Florida or Remote (anywhere in USA)</p>
                                {isExpanded && (
                                    <>
                                        <h4 className='career-body-column2-parent-heading'>Compensation</h4>
                                        <p className='career-body-column2-parent-data'>Full-Time- base salary plus commission</p>

                                        <h4 className='career-body-column2-parent-heading'>Desired Skills and Experience</h4>
                                        <p className='career-body-column2-parent-data'>
                                            Ideal candidates will have experience in selling digital marketing media such as Social Media, Advertising, Website Design, Content Creation, etc.
                                        </p>

                                        <ul className='career-body-column2-parent-ul'>
                                            <li>Proven experience and success in selling media services</li>
                                            <li>Develop sales strategies, respond to RFPs, and generate proposals that meet client objectives</li>
                                            <li>Strong verbal, written, and phone selling skills</li>
                                            <li>Experienced and Enthusiastic about a long-term career in Digital Media</li>
                                            <li>Interested in growing with a successful firm that will embrace your personal and professional goals.</li>
                                            <li>Minimum 2+ years of business experience</li>
                                        </ul>
                                    </>
                                )}

                                <button className='career-body-column2-parent-btn' onClick={toggleReadMore}>
                                    {isExpanded ? "Read Less" : "Read More"}
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Careers;
