import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader';
import './Review.css';

const Review = () => {
    const {user} = useAuth();
    const [reviewData, setReviewData] = useState({});
    const getInput = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const  newData = {...reviewData};
        newData[field]= value;
        setReviewData(newData);
        console.log(reviewData);
    }
    const handleAddReview = (e) =>{
        console.log('hello Submit');
        const url = `https://shielded-reef-06410.herokuapp.com/reviews`;
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({...reviewData, email:user.email})
        }).then(res=>res.json())
        .then(data=>{
           if(data.insertedId){
               alert("review added successfully");
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
            <h4>Add Review</h4>
            <div className='form-add'>
            <form onSubmit={handleAddReview}>
                <input type="text" name='userName' onBlur={getInput} placeholder='Your name'/><br />
                <textarea name="review" id="" cols="30" rows="10" onBlur={getInput} placeholder='review details on our service'></textarea> <br />
                <input type="text" name='img' onBlur={getInput} placeholder='country' /> <br />
                <input type="text" name= 'rate' onBlur={getInput} placeholder='rating(0-5)'/> <br />
                <input type="submit" className='btn btn-dark' value="submit"/>
            </form>
            </div>
            </div>
        </div>
        
    </div>
        
    );
};

export default Review;