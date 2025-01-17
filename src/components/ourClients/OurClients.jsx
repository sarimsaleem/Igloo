// import React from 'react'
// import { Button, Col, Container, Row } from 'react-bootstrap'
// import client1 from "/public/assets/images/ourclients1.png"
// import client2 from "/public/assets/images/ourclients2.svg"
// import client3 from "/public/assets/images/ourclients3.svg"
// import client4 from "/public/assets/images/ourclients4.jpg"
// import client5 from "/public/assets/images/ourclients5.svg"
// import client6 from "/public/assets/images/ourclients6.png"
// import client7 from "/public/assets/images/ourclients7.png"
// import client8 from "/public/assets/images/ourclients8.jpg"
// import client9 from "/public/assets/images/ourclients9.svg"
// import client10 from "/public/assets/images/ourclients10.svg"
// import client11 from "/public/assets/images/ourclients11.svg"
// import client12 from "/public/assets/images/ourclients12.png"
// import "./ourClients.css"
// const OurClients = () => {
//     const clients = [
//         client1, client2, client3, client4, client5, client6,
//         client7, client8, client9, client10, client11, client12
//     ];  
//     return (
//         <>
//             <h1 className='main-heading' style={{ marginTop: "40px" }}>SOME OF OUR CLIENTS</h1>
//             <div className='heading-underline'></div>
//             <div className="brandingAgency-clients">
//                 <div className='ourclients' style={{ border: "none" }}>
//                     <Container>
//                         <Row>
//                             {clients.slice(0, 4).map((client, index) => (
//                                 <Col md={3} key={index}>
//                                     <div className="image-box">
//                                         <img src={client} alt={`Client ${index + 1}`} />
//                                     </div>
//                                 </Col>
//                             ))}
//                         </Row>
//                         <Row>
//                             {clients.slice(4, 8).map((client, index) => (
//                                 <Col md={3} key={index}>
//                                     <div className="image-box">
//                                         <img src={client} alt={`Client ${index + 5}`} />
//                                     </div>
//                                 </Col>
//                             ))}
//                         </Row>
//                         <Row>
//                             {clients.slice(8, 12).map((client, index) => (
//                                 <Col md={3} key={index}>
//                                     <div className="image-box">
//                                         <img src={client} alt={`Client ${index + 9}`} />
//                                     </div>
//                                 </Col>
//                             ))}
//                         </Row>
//                         <div className="ourclients-btn-parent">
//                             <Button className="ourclients-btn">view all clients </Button>
//                         </div>
//                     </Container>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default OurClients