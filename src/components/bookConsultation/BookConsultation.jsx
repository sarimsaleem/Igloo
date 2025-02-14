import React from 'react'
import { Button } from 'react-bootstrap'
import "./bookConsultation.css"
import { useNavigate } from 'react-router-dom'

const BookConsultation = () => {

    const navigate = useNavigate()
    
    return (
        <div className="bookcolsultation-subparent">
            <h1 className="bookcolsultation-subparent-h1">
                WE’D LOVE TO HEAR ABOUT YOUR PROJECT
            </h1>
            <Button className="bookcolsultation-subparent-button" onClick={() => navigate("/contact")} >
                BOOK A FREE CONSULTATION
            </Button>
        </div>
    )
}

export default BookConsultation