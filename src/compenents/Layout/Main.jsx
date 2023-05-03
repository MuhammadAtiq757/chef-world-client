import React from 'react';
import Hader from '../Hader';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../footer/footer';

const Main = () => {
    return (
        <div>
            <Hader></Hader>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;