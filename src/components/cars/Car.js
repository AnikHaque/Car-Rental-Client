import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import IndividualCar from '../individualcar/IndividualCar';


import './Car.css';

const Car = () => {
    const [food, setFood] = useState([])
    useEffect(()=>{
fetch('http://localhost:5000/cars')
.then(res => res.json())
.then(data => setFood(data))
    },[])


    return (
        <div className='mt-5 mb-5'>
            
            <div className="service-container">
                <div className="container">
                <h1 className=" text-center fw-bold menu-heading">Our Cars</h1>
            <div class="row row-cols-1 row-cols-lg-4 g-4 gy-5">
                {
                    food.map(foods => <IndividualCar
                        key={foods._id}
                        foods={foods}
                    ></IndividualCar>)
                }
                </div>
                </div>
            </div>
  </div>
    )}     


export default Car;