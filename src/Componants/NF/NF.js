import React from 'react';
import { Link } from 'react-router-dom';

const NF = () => {
    return (
        <div>
            <h2 className='mt-5 mb-2'>PAGE NOT FOUND! 404</h2>
            <div className='mx-auto'><Link to='/home'><button className='btn btn-outline-dark'>Go to Home page <i class="fas fa-arrow-right"></i></button> </Link></div>
        </div>
    );
};

export default NF;