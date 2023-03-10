import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './signup';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Upload from './upload';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppWrapper() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/upload" element={loggedIn ? <Upload /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<AppWrapper />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
