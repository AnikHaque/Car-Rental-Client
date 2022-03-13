import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Register = () => {
const {user,signInUsingGoogle} = useAuth();
  return (
    <div id="login">
      <div>
                <h1 className='fw-bold mt-5'>Please Register with GOOGLE</h1>
            </div>
            
            <h5 className='mb-5'>Already Registerd? <Link to="/login">Please Login</Link></h5>
           
            
            <div>
              <button onClick={signInUsingGoogle} className='btn btn-dark text-white buttonn'><i class="fa-brands fa-google fs-3"></i></button>
              
            </div>
    </div>
  );
};

export default Register;