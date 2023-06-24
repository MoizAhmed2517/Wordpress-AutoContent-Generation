import React from 'react';

// Plugins
import { Routes, Route } from 'react-router';

// Components
import Landing from './layout/Landing';
import Login from './components/navigation/Login';
import Signup from './components/navigation/Signup';
import NavbarApp from './components/navbar/NavbarApp';
import Home from './app/Home';
import Settings from './app/Settings';


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
          <Route path='/home' element={<><NavbarApp /><Home /></>} />
          <Route path='/settings' element={<><NavbarApp /><Settings /></>} />
    
        </Routes>
    )
}

export default AppRoutes