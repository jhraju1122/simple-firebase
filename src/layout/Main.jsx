import React from 'react';
import Header from '../layout/Main';
import { Outlet } from "react-router-dom";
const Main = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;