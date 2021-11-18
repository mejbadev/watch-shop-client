import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {

  const location = useLocation();
  console.log(location);
  const history = useHistory();
  const [loginData, setLoginData] = useState({});
    const {user, loginUser, registerUser} = useAuth();
    const getInput =(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData={...loginData};
        newLoginData[field]= value;
        setLoginData(newLoginData);

    }
    const handleLogin=(e)=>{
      loginUser(loginData.email, loginData.password, location, history);
      e.preventDefault();
    }
    return (
    <div className="">
        <h2>Login</h2>
    <Form className="w-50 m-auto" onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">

    <Form.Control type="email" name='email' onBlur={getInput} placeholder="Enter email" />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" name='password' onBlur={getInput} placeholder="Password" />
  </Form.Group>
  <Button variant="primary" className="btn btn-primary" type="submit">
    Login
  </Button>
</Form>
<br />
<h6>ARE YOU NEW USER? GO FOR <Link to='/register'>REGISTRATION</Link> </h6>
        </div>
    );
};

export default Login;