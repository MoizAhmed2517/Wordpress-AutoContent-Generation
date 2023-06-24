import React from 'react';

// Plugins
import { Routes, Route } from 'react-router';

// Components
import Landing from './layout/Landing';
import Login from './components/navigation/Login';
import Signup from './components/navigation/Signup';


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

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup /> } />
    
        </Routes>
    )
}

export default AppRoutes