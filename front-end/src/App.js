import { Routes } from './Routes';
import {Navbar} from './components/Navbar';
import { Sidebar } from './components/Sidebar';

import React from 'react';
export const App = () => {
    return (
       <>
       <React.Fragment>
     <Navbar />
      </React.Fragment>
       
        <br></br>
        
        <div className="page-container">
       

            <Routes />

        </div>
       
        </>
    );
}
