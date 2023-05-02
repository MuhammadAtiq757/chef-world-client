import React from 'react';
import Hader from '../Hader';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';

const Main = () => {
    return (
        <div>
            <Hader></Hader>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;