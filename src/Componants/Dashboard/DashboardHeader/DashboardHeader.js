import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Nav, Spinner } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const DashboardHeader = () => {
    const {user, logOut} = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [userCheck, setUserCheck]= useState(false);
    useEffect(()=>{
        setIsLoading(false)
        const url = 'https://shielded-reef-06410.herokuapp.com/adminUsers';
        fetch(url)
        .then(res=>res.json())
        .then(data=> {
            const checkMap = data.find(u => user.email == u.email);
            if(checkMap){
                setUserCheck(true);
                setIsLoading(true);
            }else{
                setUserCheck(false);
                setIsLoading(true);
            }
        })
    }, [user.email])

    return (
        <div>
            <Nav className="flex-column">
            {
                !isLoading? <div className="text-white m-3">
                   loading ... <Spinner animation="border" variant="primary" />
                </div> : <div>
                {
                         userCheck ? <div className="mt-2 p-2">
                         <h5 className='text-white'>{user.email}</h5>
                         <Nav.Link as={Link} to="/allOrders">Manage All Orders</Nav.Link>
                         <Nav.Link as={Link} to="/dashboard/addAProduct">Add A product</Nav.Link>
                         <Nav.Link as={Link} to="/dashboard/makeAdmin">Make Admin</Nav.Link>
                         <Nav.Link as={Link} to="/dashboard/allProducts">Manage All Products</Nav.Link>
                         <Nav.Link as={Link} to="/home"> <button onClick={logOut} className='btn btn-warning'>Logout</button> Admin</Nav.Link>
                         
                        
                 </div> : <div className="mt-2 p-2">
                         <h5 className="text-white">{user.email}</h5>
                         <Nav.Link as={Link} to="/dashboard/myOrder">My Order</Nav.Link>
                         <Nav.Link as={Link} to="/dashboard/review">Review</Nav.Link>
                         <Nav.Link as={Link} to="/dashboard/pay">Pay</Nav.Link>
                         <Nav.Link as={Link} to="/home"> <button onClick={logOut} className='btn btn-warning'>Logout</button> User</Nav.Link>
                 </div>
                    }
                </div>
               
            }
          
            
            </Nav>
        </div>
    );
};

export default DashboardHeader;