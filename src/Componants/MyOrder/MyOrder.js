import React, { useEffect, useState }  from 'react';
import DashboardHeader from '../Dashboard/DashboardHeader/DashboardHeader';
import useAuth from '../../Hooks/useAuth';
const MyOrder = () => {
    const {user} = useAuth();
    const [myOrder, setMyOrder]= useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(false);
        const url =  `https://shielded-reef-06410.herokuapp.com/orders`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            const orderProducts = data.filter(p=>p.email == user.email);
            console.log(orderProducts);
            setMyOrder(orderProducts);
            setIsLoading(true);

        })
    }, [myOrder]);

    const handleDelete=(id)=>{
        const orders = {...myOrder};
        const confirmMessage = window.confirm("Are you sure");
        if(confirmMessage){
            const url= `https://shielded-reef-06410.herokuapp.com/orders/${id}`;
        console.log(id);
        fetch(url, {
            method: 'DELETE'
        }).then(res=> res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount){
                
           
            if(confirmMessage == true){
                const remaining = myOrder.filter(order=>order._id !== id);
                setMyOrder(remaining);
            }
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
                   <h2> MY ORDER LIST</h2>
                   <div className='row row-cols-lg-3 row-cols-md-2 row-cols-1'>
                   {
                       myOrder.map(order=><div className='col d-flex' key={order._id}>
                        <div style={{width: '100%', border:'1px solid blue'}} className="card mb-3" >
                     <div className="card-header"><h4 className='text-gray bold'>{order.productTitle}</h4></div>
                     <div className="card-body">
                         <h6 className="card-title text-primary">Name: {order.userName}</h6>
                         <h6 className="card-title text-primary">Email: {user.email}</h6>
                         <h6 className="card-title text-primary">Price: {order.productPrice} TK</h6>
                         <h6 className="card-title text-info">Address: {order.address}</h6>
                         <h6 className="card-title text-info">Status: {order?.status}</h6>
                         <div className='d-flex justify-content-around'>
                         <button onClick={()=>handleDelete(order._id)} className='btn btn-danger'>Delete</button>
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



export default MyOrder;