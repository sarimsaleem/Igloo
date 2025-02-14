import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './contact.css';
import { Typography } from 'antd';
import Carousel from '../carousel/Carousel';

const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required.').min(2, "Minimum two characters required."),
  email: Yup.string().email('Invalid email format').required('Email is required.'),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10,15}$/, 'Invalid mobile number.')
    .required('Mobile Number is required.'),
  companyName: Yup.string().required('Company Name is required.'),
  region: Yup.string().required('Please select a region.'),
  marketingBudget: Yup.string().required('Please select a monthly marketing budget.'),
  hearAboutUs: Yup.string().required('Please select how you heard about us.'),
});

const Contact = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Carousel heading="Get In Touch" imageUrl="seo-banner.jpg" breadcrumb="Home | Contact" />

      <div style={{ paddingTop: '100px' }}>
        <section className='section-contact'>
          <h2 style={{ margin: 0, fontSize: '36px', lineHeight: '1.5' }}>
            LET’S WORK TOGETHER <br /> ON YOUR NEXT PROJECT
          </h2>
        </section>
      </div>
        <Container>
      <div className="contact-parent">
          {/* <Row> */}
            <div className="contact-subparent">
              <Col md={8}>
                <Formik
                  initialValues={{
                    fullName: '',
                    email: '',
                    mobileNumber: '',
                    companyName: '',
                    region: '',
                    marketingBudget: '',
                    hearAboutUs: '',
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md={12}>
                          <div className="form-group">
                            <Typography className="mt-3">Full Name <sup>*</sup></Typography>
                            <Field type="text" name="fullName" className="form-control" placeholder="John Doe" />
                            <ErrorMessage name="fullName" component="div" className="text-danger" />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div className="form-group">
                            <Typography className="mt-3">Email <sup>*</sup></Typography>
                            <Field type="email" name="email" className="form-control" placeholder="Email@example.com" />
                            <ErrorMessage name="email" component="div" className="text-danger" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="form-group">
                            <Typography className="mt-3">Mobile Number <sup>*</sup></Typography>
                            <Field type="text" name="mobileNumber" className="form-control" placeholder="1234567890" />
                            <ErrorMessage name="mobileNumber" component="div" className="text-danger" />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div className="form-group">
                            <Typography className="mt-3">Company Name <sup>*</sup></Typography>
                            <Field type="text" name="companyName" className="form-control" placeholder="Company XYZ" />
                            <ErrorMessage name="companyName" component="div" className="text-danger" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={12}>
                          <div className="form-group">
                            <Typography className="mt-3">Region <sup>*</sup></Typography>
                            <Field as="select" name="region" className="form-control">
                              <option value=""></option>
                              <option value="North America">North America</option>
                              <option value="Europe">Europe</option>
                              <option value="Asia">Asia</option>
                              <option value="Australia">Australia</option>
                              <option value="Africa">Africa</option>
                              <option value="South America">South America</option>
                            </Field>
                            <ErrorMessage name="region" component="div" className="text-danger" />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <div className="form-group">
                            <Typography className="mt-3">Monthly Marketing Budget <sup>*</sup></Typography>
                            <Field as="select" name="marketingBudget" className="form-control">
                              <option value=""></option>
                              <option value="below AED 10,000">below AED 10,000</option>
                              <option value="below AED 25,000">below AED 25,000</option>
                              <option value="below AED 50,000">below AED 50,000</option>
                              <option value="below AED 10,000">below AED 100,000</option>
                              <option value="Above AED 100,000">Above AED 100,000</option>
                            </Field>
                            <ErrorMessage name="marketingBudget" component="div" className="text-danger" />
                          </div>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <div className="form-group">
                            <Typography className="mt-3">How Did You Hear About Us? <sup>*</sup></Typography>
                            <Field as="select" name="hearAboutUs" className="form-control">
                              <option value=""></option>
                              <option value="Google">Google</option>
                              <option value="Social Media">Social Media</option>
                              <option value="Referral">Word Of Mouth</option>
                            </Field>
                            <ErrorMessage name="hearAboutUs" component="div" className="text-danger" />
                          </div>
                        </Col>
                      </Row>

                      <Button variant="primary" type="submit" className="contactUs-btn">
                        Submit
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Col>
            </div>
          {/* </Row> */}
      </div>
        </Container>
    </>
  );
};

export default Contact;
