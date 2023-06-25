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
import Sidebar from './components/sidebar/Sidebar';
import TrendingTopic from './app/TrendingTopic';
import CompetitorTracking from './app/CompetitorTracking';


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
          <Route path='/home' element={<><Sidebar /><Home /></>} />
          <Route path='/settings' element={<><Sidebar /><Settings /></>} />
          <Route path='/trending-topic' element={<><Sidebar /><TrendingTopic /></>} />
          <Route path='/competitor-tracking' element={<><Sidebar /><CompetitorTracking /></>} />
          
    
        </Routes>
    )
}

export default AppRoutes