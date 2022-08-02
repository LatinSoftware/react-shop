import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/login';
import ResetPassword from '../containers/ResetPassword';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import  '../styles/global.css';


const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="login" element={<Login/>} />
                    <Route path="reset-password" element={<ResetPassword/>} />
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;