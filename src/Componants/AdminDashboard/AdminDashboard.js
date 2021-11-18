import React from 'react';

const AdminDashboard = () => {
    return (
        <div className='mt-2'>
            <div className="row">
                <div className="dashboardNav bg-dark col-3">
                    <DashboardHeader></DashboardHeader>
                </div>
                <div className="col-9">
                    DashBoard
                </div>
            </div>
            
        </div>
    );
};

export default AdminDashboard;