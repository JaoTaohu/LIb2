import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value
    const password = e.target[1].value
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/upload"); // redirect to upload page on successful login
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div>
    <form onSubmit={handleLogin}>
      <div>
        <h2>Login</h2>
        <label>Email</label>
        <input type="email"  />
        <label>Password</label>
        <input type="password" />
        <button type="submit">Login</button>
        {error && <p>invalid account</p>}
      </div>
    </form>
    <p>You don't have an account? <Link to="/signup">Sign up</Link></p>
    </div>
  );
}

export default Login;
