import axios from 'axios';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

import './CarReservation.css';
const CarReservation = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reserve',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div>
          
            <Container>
            

  <Row>
  <h1 className='text-center fw-bold'>Reserve a Car</h1>
  <Col xs={12} sm={12} md={6} lg={6}>
  
    <Container>
  <Row>
    <Col xs={12} sm={12} md={12} lg={12}>
        <img src='https://media.istockphoto.com/photos/auto-business-car-sale-transportation-people-and-ownership-co-picture-id1053485236?k=20&m=1053485236&s=612x612&w=0&h=Ruh_r3iWpHnrVJb5RfJO2Jw2IzvvYQaHIZG6pME84xc=' className='img-fluid w-100  image-reserve'></img>
    </Col>
  </Row>
</Container>
    </Col>

    <Col xs={12} sm={12} md={6} lg={6}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email",)} placeholder="Reserved By" defaultValue={user.displayName}/>
      <input {...register("name",)} placeholder="Car Name" />
      <input {...register("description",)} placeholder="Car Description"/>
      <input type="number" {...register("price", )} placeholder="Rent Price"/>
      <input {...register("img",)} placeholder="Car Image"/>
      <input {...register("date",)} placeholder="Booking Date"/>
      <input {...register("phone",)} placeholder="Phone Number"/>
      <input type="submit" className='fw-bold' />
    </form> 

    </Col>
    
  </Row>
</Container>
        </div>
    );
};

export default CarReservation;