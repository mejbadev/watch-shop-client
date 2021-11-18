import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';
import './AddAProduct.css';
const AddAProduct = () => {
    const [productData, setProductData] = useState({});
    const getInput = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const  newData = {...productData};
        newData[field]= value;
        setProductData(newData);
        console.log(productData);
    }
    const handleAddProduct = (e) =>{
        console.log('hello Submit');
        const url = `https://shielded-reef-06410.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        }).then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
               alert("product added successfully");
              e.target.reset();
           }
           
            
        })
        e.preventDefault();
    }
    return (
        <div className='mt-2'>
        <div className="row">
            <div className="dashboardNav bg-dark col-3">
                <DashboardHeader></DashboardHeader>
            </div>
            <div className="col-9">
            <h4>Add A Product</h4>
            <div className='form-add'>
            <form onSubmit={handleAddProduct}>
                <input type="text" name='title' onBlur={getInput} placeholder='product title'/><br />
                <textarea name="description" id="" cols="30" rows="10" onBlur={getInput} placeholder='product description'></textarea> <br />
                <input type="text" name='img' onBlur={getInput} placeholder='product image link' /> <br />
                <input type="text" name= 'price' onBlur={getInput} placeholder='product price'/> <br />
                <input type="submit" className='btn btn-dark' value="submit"/>
            </form>
            </div>
            </div>
        </div>
        
    </div>
        
    );
};

export default AddAProduct;