import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../CommonLayout/Navbar';
import Footer from '../CommonLayout/Footer';

const MainLayouts = () => {
    return (
        <div className=''>
            <header className='max-w-10/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayouts;