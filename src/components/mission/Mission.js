import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Mission.css'
const Mission = () => {
    return (
        <div className='mt-5'>
          <h1 className='text-center fw-bold mb-5'>Our Mission</h1>
            <Container className='mb-5'>
  <Row>
  <Col xs={12} sm={12} md={7} lg={7}>
    <Container>
    
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
        <img src='https://autozone.templines.org/elementor/rental/wp-content/uploads/2016/10/1920x1200_bmw_m1series_coupe_03-1-470x280.jpg' className='img-fluid w-100 mission-image'></img>
    </Col>
  </Row>
</Container>
    </Col>

    <Col xs={12} sm={12} md={5} lg={5}>
    <h4 className='fw-bold'>
Mission is to Provide Low Cost Effective Rental Solutions
</h4>
    
    <br></br>
    <p className='text-secondary'>You put your all efforts to portfolio up your business in online market. So it is very difficult for you to reach customer by the search engines due to high competition rate.
This themes is a premium WordPress SEO friendly theme that allows you to showcase your products and services, optimize for search engines and make money with Google Adsense.</p>
    <br></br>
    <ul>
        <li>Competitive Prices
</li>
        <li>Breakdown Assistance

</li>
        <li>Trusted Rent Service

</li>
        <li>24/7 Free Customer Support

</li>
    </ul>

    </Col>
    
  </Row>
</Container>
        </div>
    );
};

export default Mission;