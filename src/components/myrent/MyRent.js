import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyRent = () => {
    const [foods, setFoods] = useState([])
    const {user} = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/detailsCar?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
    return (
        <div>
            <h1 className="fw-bold mt-2 text-center mb-5">My Placed Orders : {foods.length}</h1>
              <div className="service-container  pt-4 pb-4">
                <div className="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
            {foods.map((pd, index) => (

<div class="col">
<div class="card h-100 bg-dark text-white menu-details pt-3 pb-5">
      
      <div class="card-body">
          <img src={pd.image} className='img-fluid w-100'></img>
        {/* <h4 class="card-title text-center mt-5 text-light"><b className='text-warning'>Ordered Food:</b>{pd.foodname}</h4>
        <h5 className="text-center"><b className='text-warning'>Food Price:</b> {pd.price} Taka</h5>
        <h5 className="text-center"><b className='text-warning'>Delivery Address:</b> {pd.address} </h5> */}
        <ol className='mt-5 mmm'>
          <li className='mb-2'><b className='text-warning me-2'>Rent By:</b> {user.displayName}</li>
          <li className='mb-2'><b className='text-warning me-2'>Rent Car:</b> {pd.name}</li>
          <li><b className='text-warning me-2'>Car Price:</b> {pd.price}</li>
        </ol>
      </div>
      
       
</div>
</div>
  ))}
                </div>
                </div>
             </div>
</div>
    );
};

export default MyRent;