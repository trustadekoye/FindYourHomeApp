import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './views/auth/login';
import SignUpPage from './views/auth/signup';
import DashboardView from './views/dashboard';
import ForgetPassword from './views/auth/ForgetPassword';
import ResetPassword from './views/auth/ResetPassword';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out", error.message);
    }
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={user ? <Navigate to='/dashboard' /> : <LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/dashboard' element={user ? <DashboardView onLogout={handleLogout} /> : <Navigate to='/' />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='/reset-password/:resetToken' element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
