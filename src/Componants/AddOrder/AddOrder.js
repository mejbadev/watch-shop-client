import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './AddOrder.css';

const AddOrder = () => {
    const {id} = useParams();
    const {user} = useAuth();
    const history = useHistory();
    const [productDetail, setProductDetail]= useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [order, setOrder] = useState({});

    useEffect(()=>{
        setIsLoading(false);
        const url = `https://shielded-reef-06410.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setProductDetail(data);
            setIsLoading(true);
        })
    },[])

    const getInput = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const  newData = {...order};
        newData[field]= value;
        setOrder(newData);
        console.log(order);
    }
    const handleAddOrder = (e) =>{
        const orderDetail = {
            ...order,
            email: user.email,
            productTitle: productDetail.title,
            productId: productDetail._id,
            productPrice: productDetail.price,
            status: 'pending'
        }
        const url = `https://shielded-reef-06410.herokuapp.com/orders`;
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        }).then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
               alert("order added successfully");
              e.target.reset();
              history.push('/payment');
           }
           
            
        })
        console.log(orderDetail);
        e.preventDefault();
    }

    return (
        <div className="container">
            <h2>BOOKING YOUR ORDER</h2>
            <hr className= 'order-underline'/>
            {
                !isLoading ? <div>Loading ...</div> : <div className='row row-cols-lg-2 row-cols-md-2 row-cols-1'>
               <div className='gx-2 col mb-2' >
            <div className='product-container h-100 d-flex flex-column justify-content-between'>
            <div>
            <img src={productDetail.img} alt="" srcset="" />
                <h2>{productDetail.title}</h2>
                <p>{productDetail.description}</p>
                <p>{productDetail.price} Tk</p>
                </div>
                        
                </div>
            </div>
                <div>
            <h4>Add Order</h4>
            <h6>{user.email}</h6>
            <div className='form-added'>
            <form onSubmit={handleAddOrder}>
                <input type="text" name='userName' onBlur={getInput} placeholder='Your name'/><br />
                <textarea name="address" id="" cols="30" rows="10" onBlur={getInput} placeholder='Your Address'></textarea> <br />
                <input type="text" name='mobile' onBlur={getInput} placeholder='mobile' /> <br />
                <input type="submit" className='btn btn-dark' value="submit"/>
            </form>

        </div>
        
                </div>

            </div>
            }

            
        </div>
    );
};

export default AddOrder;