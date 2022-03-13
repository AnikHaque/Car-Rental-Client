import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import CarReservation from '../carreservation/CarReservation';
import Car from '../cars/Car';
import Contact from '../Contact/Contact';
import Dealer from '../dealer/Dealer';
import Mission from '../mission/Mission';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <br></br>
            
            
            <About></About>
            <br></br>
            
            
            <Car></Car>
            <br></br>
            
            
            <Mission></Mission>
            <br></br>
            
            
            <Dealer></Dealer>
           
            <CarReservation></CarReservation>
            <br></br>
            
            <Contact></Contact>
            
        </div>
    );
};

export default Home;