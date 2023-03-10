import React, { useState, useContext, createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SignUp from './signup';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Upload from './upload';
import Login from './Login';

// Create a new context for managing the user authentication state
export const AuthContext = createContext();

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppWrapper() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  // Pass the authentication state and methods to the context provider
  return (
    <AuthContext.Provider value={{ loggedIn, handleLogin, handleLogout }}>
      <BrowserRouter>
        <Routes>
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

function App() {
  // Get the authentication state and methods from the context provider
  const { loggedIn, handleLogin, handleLogout } = useContext(AuthContext);

  return (
    <div>
      <nav>
        {loggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Navigate to="/login" />
          </>
        )}
      </nav>
      <Routes>
        <Route path="/upload" element={loggedIn ? <Upload /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

root.render(<AppWrapper />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
