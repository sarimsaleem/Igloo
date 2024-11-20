import React from 'react'
import section7 from "../../../assets/section6-7.jpg"
import "./bounce.css"
import { Container } from 'react-bootstrap'

const Bounce = () => {
    return (
        <div className='bounce'>
            <Container>
                <div className="bounceImg">
                    <img src={section7} alt="" />
                </div>
                <div className="bounce-text">
                    <p className='bounce-text-p' >Igloo being a boutique agency, has high service standards, comparable to any large global agency.</p>
                    <h3 className='bounce-text-heading'>Manuri Nakkawita-Anthonis | Director of Marketing at Bounce Middle East</h3>
                </div>
            </Container>
        </div>
    )
}

export default Bounce