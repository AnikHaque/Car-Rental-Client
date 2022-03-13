import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './IndividualCar.css';
const IndividualCar = (props) => {
    const {_id,name,description,img,price} = props.foods;
    return (
        <div>
           <div class="col">
    <div class="card h-100 w-100 card-bg p-2">
      <img src={img} class="card-img-top img-fluid w-100" alt="..."></img>
      <div class="card-body">
        <h5 class="card-title text-center fw-bolder">{name}</h5>
        <p className='text-center'>{description.slice(0,60)}</p>
        <h4 class="card-text fw-bold text-center">$ {price}</h4>
      </div>
      <Link to={`/menudetails/${_id}`}>
        <button className="btn btn-dark text-white px-5 mx-4 pe-5 mb-3 mt-3">Rent Now</button>
        </Link>
     
  </div>
</div>
        </div>
    );
};

export default IndividualCar;