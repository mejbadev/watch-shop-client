import React from 'react';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className="row">
                <div className="dashboardNav bg-dark col-3">
                    <DashboardHeader></DashboardHeader>
                </div>
                <div className="col-9">
                    <h2>Welcome to Dashboard</h2>

                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;