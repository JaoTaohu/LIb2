import { useState } from "react";
import { redirect, Link, Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [redirectToUpload, setRedirectToUpload] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setRedirectToUpload(true);
      navigate("/upload")  // set state to redirect to upload page
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div>
    <form onSubmit={handleSignup}>
    <div>
      <h2>Sign Up</h2>     
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' >Sign Up</button>        
    </div>
    </form>
    <p> have an account? <Link to="/login">Sign in</Link></p>
    </div>
  );
}

export default Signup;
