import './App.css';
import Home from './Componants/Home/Home/Home';
import Header from './Shared/Header/Header';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Componants/Login/Login/Login';
import Register from './Componants/Login/Register/Register';
import Dashboard from './Componants/Dashboard/Dashboard';
import MyOrder from './Componants/MyOrder/MyOrder';
import Review from './Componants/Review/Review';
import AddAProduct from './Componants/AdminDashboard/AddAProduct/AddAProduct';
import Footer from './Shared/Footer/Footer';
import ExploreProducts from './Componants/ExploreProducts/ExploreProducts';
import PrivateRoute from './Componants/Login/PrivateRoute/PrivateRoute';
import AddOrder from './Componants/AddOrder/AddOrder';
import Pay from './Componants/Pay/Pay';
import Payment from './Componants/Payment/Payment';
import AllOrders from './Componants/AdminDashboard/AllOrders/AllOrders';
import MakeAdmin from './Componants/AdminDashboard/MakeAdmin/MakeAdmin';
import AllProducts from './Componants/AllProducts/AllProducts';
import NF from './Componants/NF/NF';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route exact path="/dashboard">
            <Dashboard></Dashboard>
        </Route>
        <Route path='/dashboard/pay'>
          <Payment></Payment>
        </Route>
        <Route path='/dashboard/myOrder'>
          <MyOrder></MyOrder>
        </Route>
        <Route path='/dashboard/review'>
          <Review></Review>
        </Route>
       
        <Route path='/dashboard/addAProduct'>
          <AddAProduct></AddAProduct>
        </Route> 
        <Route path='/dashboard/allProducts'>
          <AllProducts></AllProducts>
        </Route> 
        <Route path='/dashboard/makeAdmin'>
          <MakeAdmin></MakeAdmin>
        </Route>
        <PrivateRoute path='/addOrder/:id'>
          <AddOrder></AddOrder>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <Route path='/explore'>
          <ExploreProducts></ExploreProducts> 
        </Route>
        <Route path='/allOrders'>
          <AllOrders></AllOrders>
        </Route>
        <Route path='/register'>
          <Register></Register>          
        </Route>
        <Route path='/payment'>
          <Pay></Pay>          
        </Route>
      <Route exact path='/'>
          <Home></Home>
        </Route>
     
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/*'>
            <NF></NF>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
