import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts]= useState([]);
    const [isLoading, setIsLoading]= useState(false);
    useEffect(()=>{
        setIsLoading(false);
        const url =`https://shielded-reef-06410.herokuapp.com/products`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setIsLoading(true);
        })
    }, [])
    return (
        <div className='container products mt-4'>
            <div>
            <div className='mb-1'>
            <h2>WATCH COLLECTION</h2>
            <h6 className="text-primary">We provide you the BEST</h6>
            <hr className='underline'/>
            </div>
            <div className='d-flex justify-content-end'><Link to='/explore'><button className='btn btn-outline-dark'>Explore All Products <i class="fas fa-arrow-right"></i></button> </Link></div>

            </div>
            <div >
            {
                !isLoading ? <div className="m-3">Loading ... <Spinner animation="border" variant="primary" /></div> : <div className=' mt-3 mx-auto  row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
                    {
                        products.slice(0,6).map(product=> <Product key={product._id} product={product}></Product>)
                    }

                   
                </div>
            }
            </div>
           
            
        </div>
    );
};

export default Products;