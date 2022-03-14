import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useForm, useWatch } from "react-hook-form";

import './CarDetails.css'
 import useAuth from '../../hooks/useAuth';

const headingService={
   textAlign:'center',
   fontSize:'40px',
   fontWeight:'bolder'
}
const CarDetails = () => {
    const {user} = useAuth();
   const { register, handleSubmit, reset } = useForm();
   const onSubmit = data =>{
       console.log(data);
       axios.post("https://desolate-dusk-17364.herokuapp.com/detailsCar",data)
       .then(res=>{
           if(res.data.insertedId){
               alert("Added Successfully");
               reset();
               
           }
       })
   } 
     const {id} = useParams();
    const [food,setFood] = useState({})
     useEffect(()=>{
         fetch(`https://desolate-dusk-17364.herokuapp.com/cars/${id}`)
       .then(res=>res.json())
        .then(data=>setFood(data))

     },[])
    return (
        <div className='mt-5'>
<Container>
  <Row>
    <Col className='mb-5 shadow' sm={12} md={12} lg={6}><img src={food.img} className='img-fluid  mb-5  car-image rounded'></img></Col>
    <Col sm={12} md={12} lg={6}>
    <form onSubmit={handleSubmit(onSubmit)} className="bg-dark text-center pt-4 pb-4 px-4 pe-4 mb-5">
     <input {...register("email", { required: true, maxLength: 520 })} placeholder="email" className='w-100 p-2' defaultValue={user.email} />
<br></br>
<br></br>
     <input {...register("name", { required: true, maxLength: 520 })} placeholder="name" className='w-100 p-2' defaultValue={user.displayName} />
     <br></br>
<br></br>
     <input {...register("foodname", { required: true, maxLength: 1520 })} placeholder="Car Name" className='w-100 p-2'  />

     <br></br>
<br></br>
     <input type="text" {...register("price")}placeholder="Rent Price" className='w-100 p-2'/>
     <br></br>
<br></br>
<input {...register("image", { required: true, maxLength: 920 })} placeholder="Car Image" className='w-100 p-2'/>
<br></br>
<br></br>
     
     
     <input type="submit" className='w-50' />
   </form>   
        
    </Col>
  </Row>
</Container>

<div class="container">
  <div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 bg-dark pt-5 pb-5">
         <h1 className='text-white text-center fw-bold'>Car Details:</h1>
         <br></br>
    <h4 className='fw-bold text-white text-center'> Car Name:</h4>
    <p className='text-white text-center'>  {food.name}</p>
        <br></br>
        <h4 className='fw-bold text-white text-center'>Car description:</h4>
        <p className='text-white text-center'>{food.description}</p>
        <br></br>
        <h4 className='fw-bold text-white text-center'>Rent price:</h4>
        <p className='text-white text-center'>{food.price}</p>
         
    </div>
  </div>
</div>
 </div>
    );

    }
export default CarDetails;