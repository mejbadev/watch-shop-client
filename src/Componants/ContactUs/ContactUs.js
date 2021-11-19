import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './ContactUs.css';

const ContactUs = () => {
    const {user} = useAuth();

    return (
        <div className='container mb-2 mt-3' id='contact'>
            <h2 className='text-dark'>CONTACT US</h2>
            <p className='text-primary'>Put Your Message to connect you.</p>
            <hr className='underline'/>
            <div className='login-form bg-dark bg-opacity-75 w-75 mx-auto p-5 mt-3'>
             
                
                <input className='p-2 '  type="text" name="name" id="" placeholder='Name' />
                <br /><br />
                <input className='p-2' value={user.email}  type="text" name="email" id="" placeholder='Email' />
                <br /><br />
                <textarea name="message" id="" cols="30" rows="10" placeholder='Put your message'></textarea>
                <br /><br />
                <button className='btn btn-dark p-2' type="submit">Submit</button>
            
                
           </div>
        </div>
    );
};

export default ContactUs;