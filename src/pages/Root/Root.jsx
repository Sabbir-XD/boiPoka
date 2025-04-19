import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import Home from '../Home/Home';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
            <ToastContainer position="top-center" autoClose={2000} />
        </div>
    );
};

export default Root;