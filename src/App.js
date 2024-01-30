import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './views/auth/login';
import SignUpPage from './views/auth/signup';
import DashboardView from './views/dashboard';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/dashboard' element={<DashboardView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
