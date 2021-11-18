import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
    const {img, title, _id, description, price} = props.product;
    const link = `/addOrder/${_id}`;
    return (
        <div className='gx-2 col mb-2' >
            <div className='product-container h-100 d-flex flex-column justify-content-between'>
            <div>
            <img src={img} alt="" srcset="" />
                            <h2>{title}</h2>
                            <p>{description}</p>
                            <p>{price} Tk</p>
                            </div>
                            <div>
                            <Link to={link} > <button className='btn btn-dark'>Buy Now</button></Link>
                            </div>
                            </div>
        </div>
    );
};

export default Product;