import React from 'react';

// Plugins
import { Routes, Route } from 'react-router';

// Components
import Landing from './layout/Landing';


const AppRoutes = () => {
    return (
        <Routes>
          
    
          <Route 
            exact 
            path='/' 
            element={
              <Landing />
            } 
          />
    
        </Routes>
    )
}

export default AppRoutes