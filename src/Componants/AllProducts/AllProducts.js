import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader';

const AllProducts = () => {
    const {user} = useAuth();
    const [products, setProducts]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(false);
        const url =  `https://shielded-reef-06410.herokuapp.com/products`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            setIsLoading(true);

        })
    }, []);

    const handleDelete=(id)=>{
        const orders = {...products};
        const confirmMessage = window.confirm("Are you sure for deleting?");
        if(confirmMessage){
            const url= `https://shielded-reef-06410.herokuapp.com/products/${id}`;
        console.log(id);
        fetch(url, {
            method: 'DELETE'
        }).then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                const remaining = products.filter(product=>product._id !== id);
                setProducts(remaining);
            
            }
        })
        }
        
    }
    return (
        <div className='mt-2'>
            <div className="row">
                <div className="dashboardNav bg-dark col-3">
                    <DashboardHeader></DashboardHeader>
                </div>
                <div className="container col-9">
                   <h2> Products List</h2>
                   <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1'>
                   {
                       products.map(product=><div className='col d-flex' key={product._id}>
                        <div style={{width: '100%', border:'1px solid blue'}} className="card mb-3" >
                     <div className="card-header"><h4 className='text-gray bold'>{product.title}</h4></div>
                     <div className="card-body">
                         <h6 className="card-title text-primary">Name: {product.price}</h6>
                         <div className='d-flex justify-content-around'>
                         <button onClick={()=>handleDelete(product._id)} className='btn btn-danger'>Delete</button>
                         </div>
                     </div>
                 </div>
                       </div>)
                   }
                   </div>
                  
                </div>
            </div>
            
        </div>
    );
};



export default AllProducts;