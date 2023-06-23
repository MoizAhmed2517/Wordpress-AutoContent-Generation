import React from 'react';

// Plugins
import { Routes, Route } from 'react-router';

// Components
import Navbar from './components/navbar/Navbar';


const AppRoutes = () => {
    return (
        <Routes>
          
    
          <Route 
            exact 
            path='/' 
            element={
              <Navbar />
            } 
          />
    
        </Routes>
    )
}

export default AppRoutes