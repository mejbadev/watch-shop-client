import React, { useEffect, useState } from 'react';
import ExploreProduct from '../ExploreProduct/ExploreProduct';
import './ExploreProducts.css';

const ExploreProducts = () => {
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
        <div className='products'>
            <h2>WATCH COLLECTION</h2>
            <h6 className="text-primary">We provide you the BEST</h6>
            <div >
            {
                !isLoading ? <div>Loading ...</div> : <div className='container mt-3 mx-auto  row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
                    {
                        products.map(product=> <ExploreProduct key={product._id} product={product}></ExploreProduct>)
                    }
                </div>
            }
            </div>
           
            
        </div>
    );
};

export default ExploreProducts;