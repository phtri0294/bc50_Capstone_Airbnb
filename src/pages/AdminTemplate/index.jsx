import React from 'react'
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from './_components/Footer';
import Sidebar from './_components/Sidebar';
import Topbar from './_components/Topbar';

export default function AdminTemplate() {
    //Check login
    // if (!localStorage.getItem('LOGIN_ADMIN')) {
    //     return <Navigate to='/auth' replace />
    // }

    return (
        <div className='flex w-screen h-screen'>
            {/* Sidebar */}
            <Sidebar />

            <div className='flex-1 flex flex-col'>
                {/* Topbar */}
                {/* <Topbar pageTitle={pageTitle} /> */}
                <Topbar />

                {/* Page Content */}
                <div className='flex-1 overflow-y-auto bg-gray-100 p-4'>
                    <div className='container mx-auto'>
                        <Outlet />
                    </div>
                </div>

                {/* Footer */}
                <div className='sticky-footer bg-gray-400 text-gray-900 py-3'>
                    <div className='container my-auto'>
                        <Footer />
                    </div>
                </div>
                {/* End of Footer */}
            </div>
        </div>
    );
};
