import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews]= useState([]);
    const [isLoading, setIsLoading]= useState(false);
    useEffect(()=>{
        setIsLoading(false);
        const url =`https://shielded-reef-06410.herokuapp.com/reviews`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setReviews(data);
            setIsLoading(true);
        })
    }, [])
    return (
        <div className='container reviews mt-5 mb-3'>
            <h2>WHAT OUR CLIENT SAYS</h2>
          
            <h6 className="text-primary">The Real Reviews</h6>
            <hr className='underline'/>
            <div >
            {
                !isLoading ? <div>Loading ...</div> : <div className=' mt-3 mx-auto  row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
                    {
                        reviews.map(review=> <div className='gx-2 col mb-2' key={review._id}>
                            <div className='product-container h-100 d-flex flex-column justify-content-between'>
                            <Card border="primary">
                                <Card.Header>{review.userName}</Card.Header>
                                <Card.Body>
                                <Card.Title> from {review.img}</Card.Title>
                                <Card.Text>
                                    {review.review}
                                </Card.Text>
                                <Card.Text>
                                {review.rate} 
                                <Rating
                                initialRating={review.rate}
                                className='icon-color'
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                ></Rating>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </div>
                        </div>)
                    }
                </div>
            }
            </div>
           
            
        </div>
    );
};

export default Reviews;