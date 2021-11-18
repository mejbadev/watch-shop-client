import React from 'react';
import { Link } from 'react-router-dom';

const Pay = () => {
    return (
        <div>
            <h2>PAYMENT PAGE</h2>
            <h5>PAYMENT PAGE IS COMING SOON! SORRY </h5>
            <div className='mx-auto'><Link to='/home'><button className='btn btn-outline-dark'>Go to Home page <i class="fas fa-arrow-right"></i></button> </Link></div>

        </div>
    );
};

export default Pay;