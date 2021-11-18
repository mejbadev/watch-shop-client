import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer bg-dark pb-3 mt-3'>
            <div className='d-flex justify-content-around footer-detail'>
                <div className='first-part'>
                    <h5 className='text-white text-start'>Get in Touch</h5>
                    <h3 className='text-white text-start'>Contact us now</h3>
                    <hr />
                    <div className='d-flex'>
                        <div className='emergency'>
                            <h4 className='text-white text-start'>Contact</h4>
                            <h6 className='text-white text-start'><i className="far fa-address-card"></i> Road 5, house-5, Nilkhet, Dhaka</h6>
                            <p className='text-primary text-start'> 0166666666</p>
                        </div>
                        <div className='home-visit'>
                            <h4 className='text-white text-start'>Visit Us</h4>
                            <h6 className='text-white text-start'><i className="far fa-address-card"></i> House 5/70, Motijeel, Dhaka</h6>
                            <h6 className='text-primary text-start'> 01777777777</h6>
                        </div>
                    </div>

                </div>
                <div>
                    <h5 className='text-center text-white'>Subscribe Us
                    </h5>
                    <input type="text" name='Email' placeholder='Enter your email' /> <br />
                    <button className='btn btn-light text-primary mt-2 p-2'  type="submit">Subcribe</button>
                </div>
            </div>

            <p className='text-white'>Copyright<i class="far fa-copyright"></i> Mejba-2022</p>
            
        </div>
    );
};

export default Footer;