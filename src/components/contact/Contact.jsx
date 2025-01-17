import React from 'react';
import "./contact.css"
const Contact = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '100px 0px' }}>
      {/* Header Section */}
        {/* <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  }}>
            <h1 style={{ margin: 0, fontSize: '24px' }}>CONTACT</h1>
            <nav>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
                <li><a href="/" style={{ textDecoration: 'none', color: 'black' }}>HOME</a></li>
                <li><a href="/contact" style={{ textDecoration: 'none', color: 'black' }}>CONTACT</a></li>
            </ul>
            </nav>
        </header> */}

      {/* Hero Section */}
      <section className='section-contact' >
        <h2 style={{ margin: 0, fontSize: '36px', lineHeight: '1.5' }}>
          LET’S WORK TOGETHER <br /> ON YOUR NEXT PROJECT
        </h2>
      </section>
    </div>
  );
};

export default Contact;
