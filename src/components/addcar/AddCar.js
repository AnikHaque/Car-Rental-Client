import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddCar.css';
const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/cars',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-menu'>
            <h1 className='text-center fw-bold mb-5 mt-5'>Please Add a Menu !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name",)} placeholder="Car Name" />
      <input {...register("description",)} placeholder="Car Description"/>
      <input type="number" {...register("price", )} placeholder="Rent Price"/>
      <input {...register("img",)} placeholder="Car Image"/>
      <input type="submit" />
    </form> 
        </div>
    );
};

export default AddCar;