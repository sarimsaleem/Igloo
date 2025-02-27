import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

import "./blog.css"

const Blog = () => {

  const blogData = [

    { id: 1, src: "/public/assets/images/blog1.png", heading: "The Ultimate SEO Growth Guide for 2025", subheading: "Posted by Igloo | 19 February 2025 | SEO", description: "SEO has become more than just a priority in the UAE—it’s a fundamental aspect of long-term growth and success for any UAE business. Whether you’re running a cozy cafe in Dubai, a boutique shop in Abu Dhabi, or a service-based business in Sharjah, SEO is your secret to success.  From mobile optimization to voice search", btn: "CONTINUE READING" },

    { id: 2, src: "/public/assets/images/blog1.png", heading: "The Ultimate SEO Growth Guide for 2025", subheading: "Posted by Igloo | 19 February 2025 | SEO", description: "SEO has become more than just a priority in the UAE—it’s a fundamental aspect of long-term growth and success for any UAE business. Whether you’re running a cozy cafe in Dubai, a boutique shop in Abu Dhabi, or a service-based business in Sharjah, SEO is your secret to success.  From mobile optimization to voice search", btn: "CONTINUE READING" },

    { id: 3, src: "/public/assets/images/blog1.png", heading: "The Ultimate SEO Growth Guide for 2025", subheading: "Posted by Igloo | 19 February 2025 | SEO", description: "SEO has become more than just a priority in the UAE—it’s a fundamental aspect of long-term growth and success for any UAE business. Whether you’re running a cozy cafe in Dubai, a boutique shop in Abu Dhabi, or a service-based business in Sharjah, SEO is your secret to success.  From mobile optimization to voice search", btn: "CONTINUE READING" },

    { id: 4, src: "/public/assets/images/blog1.png", heading: "The Ultimate SEO Growth Guide for 2025", subheading: "Posted by Igloo | 19 February 2025 | SEO", description: "SEO has become more than just a priority in the UAE—it’s a fundamental aspect of long-term growth and success for any UAE business. Whether you’re running a cozy cafe in Dubai, a boutique shop in Abu Dhabi, or a service-based business in Sharjah, SEO is your secret to success.  From mobile optimization to voice search", btn: "CONTINUE READING" },

    { id: 5, src: "/public/assets/images/blog1.png", heading: "The Ultimate SEO Growth Guide for 2025", subheading: "Posted by Igloo | 19 February 2025 | SEO", description: "SEO has become more than just a priority in the UAE—it’s a fundamental aspect of long-term growth and success for any UAE business. Whether you’re running a cozy cafe in Dubai, a boutique shop in Abu Dhabi, or a service-based business in Sharjah, SEO is your secret to success.  From mobile optimization to voice search", btn: "CONTINUE READING" },

  ]

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const categories = [
    { name: "Branding", count: 15 },
    { name: "Content Marketing", count: 29 },
    { name: "Designing", count: 2 },
    { name: "Digital Marketing", count: 77 },
    { name: "Dubai web industry", count: 4 },
    { name: "Home", count: 12 },
    { name: "Insights", count: 80 },
    { name: "Lead Generation", count: 14 },
    { name: "Logo Design", count: 2 },
    { name: "Marketing Automation", count: 12 },
    { name: "Mobile Marketing", count: 2 },
    { name: "PPC", count: 16 },
    { name: "SEO", count: 65 },
    { name: "Social Media", count: 53 },
    { name: "Uncategorized", count: 95 },
    { name: "Web Design", count: 34 },
    { name: "Website Development", count: 9 },
  ];

  return (
    <>
      <Container>
        <div className="career-header">
          <h1>BLOG</h1>
          <p>HOME | BLOG</p>
        </div>
      </Container>

      <div className="blog">
        <Container>
          <Row>
            <Col md={8}>
              {blogData.map((item) => (
                <div key={item.id} className="blog-item">
                  <div className="blog-img-container">
                    <img src={item.src} alt="" />
                  </div>
                  <div className="blog-text-container">
                    <h3>{item.subheading}</h3>
                    <h1>{item.heading}</h1>
                    <p>{item.description}</p>
                    <div className="icons-parent">
                      <i>
                        <a href="">
                          <CiHeart />
                          <span>Like Likes</span>
                        </a>
                      </i>
                      <i>
                        <a href="">
                          <FaRegComment />
                          <span>Leave a comment</span>
                        </a>
                      </i>
                    </div>
                  </div>
                  <button className="blog-btn">
                    <a href="">{item.btn}</a>
                  </button>
                </div>
              ))}
            </Col>
            <Col md={4}>
              <div className="blog-item2">
                <div className="blog-item2-first-first-sec">
                  <h4 className="blog-item2-heading">SEARCH</h4>
                  <div className="blog-item2-input-parent">
                    <input className="blog-item2-input" type="text" />
                    <button className='blog-item2-input-btn'><IoIosSearch /></button>
                  </div>
                </div>
                <div className="categories-container">
                  <h4 className="blog-item2-heading">Categories</h4>
                  <ul className="blog-item2-list">
                    {categories.map((category, index) => (
                      <li key={index} className="blog-item2-item">
                        <a href="">{category.name}</a><span className="count"> / {category.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Blog