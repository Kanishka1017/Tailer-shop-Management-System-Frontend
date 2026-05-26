import React from "react";
import './Register.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaSquarePhoneFlip } from "react-icons/fa6";

function Register() {
  return(
        <div className="register-box">
            <h1>Registration</h1>

            <div className="input-box">
                <input type="text" placeholder="Name" required/>
                <FaUser className="icon" />
            </div>

            <div className="input-box">
                <input type="text" placeholder="Mobile No" required/>
                <FaSquarePhoneFlip className="icon" />
            </div>

            <div className="input-box">
                <input type="password" placeholder="Password" required/>
                <FaLock className="icon"/>
            </div>

            <div className="regi-button">
                <button type="submit">Register</button>
            </div>

            <div className="login-button">
                <p>Already have an account ? <a href="./">Login</a></p>
            </div>
        </div>
      );
    };

export default Register;