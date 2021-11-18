import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const location = useLocation();
    const history = useHistory();
    const {user, loginUser, registerUser} = useAuth();
    const getInput =(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData={...registerData};
        newRegisterData[field]= value;
        setRegisterData(newRegisterData);
    }
    const handleRegister=(e)=>{

        if(registerData.password !== registerData.password2){
            alert('Password not matched');
            return;
        }else{

          const url = `https://shielded-reef-06410.herokuapp.com/users`;
          fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({...registerData, status:"User"})
        }).then(res=>res.json())
        .then(data=>{
           console.log(data);
            
        })
            registerUser(registerData.email, registerData.password, location, history);
        }

        

        e.preventDefault();
    }
    return (
    <div className="">
        <h2>Please Register</h2>
    <Form className="w-50 m-auto" onSubmit={handleRegister}>
    <Form.Group className="mb-3" controlId="formBasicEmail">

<Form.Control type="text" onBlur={getInput} name='name' placeholder="Enter Your Name" />

</Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="email" onBlur={getInput} name='email' placeholder="Enter email" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" name="password" onBlur={getInput} placeholder="Password (minimum 6 characters)" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" name="password2" onBlur={getInput} placeholder="Retype Your Password" />
  </Form.Group>
  <Button variant="primary" className="btn btn-primary" type="submit">
    Submit
  </Button>
</Form>
<br />
<h6>AlREADY REGISTERED? <Link to='/login'>LOGIN</Link> </h6>
    </div>
    );
};

export default Register;