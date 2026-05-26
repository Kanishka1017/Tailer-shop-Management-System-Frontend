import './LoginForm.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import React, {useState} from "react";
import {Link, useNavigate } from "react-router-dom";



const LoginForm = () => {
  const navigate = useNavigate();

  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setError("Enter Username and Password !");
      return;
    }

    navigate("/Home");
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>


        {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // ✅
          />
          <FaUser className="icon"/>
        </div>

        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // ✅
          />
          <FaLock className="icon"/>
        </div>

        <div className="remember-forget">
          <label><input type="checkbox"/>Remember me</label>
          <a href="ForgetPassW">Forget Password</a>
        </div>

        <button type="submit">Login</button>

        <div className="Register-link">
          <p>Dont't have an account ? <a href="Register">Register</a></p>
        </div>

      </form>
    </div>
  );
};
export default LoginForm;