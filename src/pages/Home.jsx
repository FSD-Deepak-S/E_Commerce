import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <nav>
                <Link to="product">Products</Link>
            </nav>
            <Outlet/>
        </div>
    );
};

export default Home;