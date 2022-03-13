import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './About.css';
const About = () => {
    return (
        <div className='mt-5'>
            <Container className='mb-5'>
  <Row>
    <Col xs={12} sm={12} md={5} lg={5}>
    <h4 className='fw-bold text-about'>Best Rental Service
</h4>
    
    <br></br>
    <p className='text-secondary'>This is a Free Demo of our Premium Responsive WordPress Theme. It has an awesome Car Rental Landing Page.
Fully Customizable and every page can be fully customized so you will not have any problems using your own logo, texts or other elements to design it in the way you want. Click below link now to see how our theme works:</p>
    <br></br>
    <Button variant="dark" className='Details-button text-white'>Read More</Button>

    </Col>
    <Col xs={12} sm={12} md={7} lg={7}>
    <Container>
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
        <img src='https://autozone.templines.org/elementor/rental/wp-content/uploads/2022/01/tw2.jpg' className='img-fluid w-100 about-image'></img>
    </Col>
  </Row>
</Container>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default About;