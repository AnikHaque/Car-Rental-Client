import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Sign.css'
const Sign = () => {
    
    const {user,signInUsingGoogle} = useAuth();
    return (
        <div id="login">
            <div>
            <h1 className='mt-5'>Please Login with GOOGLE</h1>
            </div>
            
            <h5>New to Foodie? <Link to="/register">Create acount</Link></h5>
            <br></br>
            <div>
              <button onClick={signInUsingGoogle} className='btn btn-dark text-white buttonn'><i class="fa-brands fa-google fs-3"></i></button>
              
            </div>
            <div>
              
            </div>
        </div>
    );
};

export default Sign;