import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import DashboardHeader from '../../Dashboard/DashboardHeader/DashboardHeader';

const MakeAdmin = () =>  {
    const {user} = useAuth();
    const [emailId, setEmailId] = useState('');
    const [users, setUsers] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [userToMakeAdmin, setUserToMakeAdmin]=useState({});
    
    useEffect(()=>{
        setIsLoading(false);
        fetch(`https://shielded-reef-06410.herokuapp.com/users`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setUsers(data);
            setIsLoading(true);
        })
    }, [])

    const getInput = e =>{

    const value = e.target.value;
    console.log(value);
    setEmailId(value);

    }
    const handleAddReview = (e) =>{
        e.preventDefault();
        if(isLoading){
            const userToAdmin = users.find(user=>user.email === emailId);
        console.log(userToAdmin);
        if(userToAdmin?.email){
            const url= `https://shielded-reef-06410.herokuapp.com/adminUsers`;
            fetch(url, {
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userToAdmin)
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
               if(data.insertedId){
                   alert("added As successfully");
                  e.target.reset();
               }
               
                
            })
        }else{
            alert('sorry! your provided email is not in the list of users');
            e.target.reset();
        }

        }
        
        
    }
    return (
        <div className='mt-2'>
        <div className="row">
            <div className="dashboardNav bg-dark col-3">
                <DashboardHeader></DashboardHeader>
            </div>
            <div className="col-9">
            <h4>Make Your Users As Admin</h4>
            <div className='form-add'>
            <form onSubmit={handleAddReview}>
                <input type="text" name='email' onBlur={getInput} placeholder='User Mail'/><br />
                <input type="submit" className='btn btn-dark' value="submit"/>
            </form>
            </div>
            </div>
        </div>
        
    </div>
        
    );
};

export default MakeAdmin;