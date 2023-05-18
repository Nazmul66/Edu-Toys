import React from 'react';
import Header from '../Component/Header/Header';
import Footer from '../Component/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
              <div className='min-h-[calc(100vh-620px)]'>
                  <Outlet></Outlet>
              </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;