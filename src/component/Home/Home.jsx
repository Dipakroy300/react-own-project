import React from 'react';
import {Outlet,useNavigation} from 'react-router-dom';
import Header from '../Header/Header';
const Home = () => {

    const navigation=useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{navigation.state=== 'loading' && 'loading...'}</div>
            <h1>Home ,Real home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;