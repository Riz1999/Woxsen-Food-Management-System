import React, { useState } from "react";
import axios from "axios";
import "./SignInSignUp.css";
<script src="https://smtpjs.com/v3/smtp.js"></script>

const SignInSignUpPage = ({ onLoginSuccess }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleToggleForm = () => {
    setShowSignUp(!showSignUp);
    setError("");
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
      });
      console.log(response.data); // This should print the response from the server
      const { token, userId } = response.data;

      // Save the token and user ID in local storage or a state variable
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
      onLoginSuccess(); // Call the onLoginSuccess function passed as a prop
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  const handleSignUp = async () => {
    if (!email.endsWith("woxsen.edu.in")) {
      setError("Only woxsen.edu.in emails are supported.");
      return;
    }
  
    // Generate a random 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
  
    try {
      const response = await axios.post("http://localhost:5000/api/signup", {
        name,
        email,
        password,
        otp, // Add the OTP to the request payload to be sent to the server
      });
      console.log(response.data); // This should print the response from the server
  
      // Send the OTP over email using SMTPJS
      window.Email.send({
        SecureToken : "5f7c5a7c-ce56-4069-885a-9c24f7acbe1c",
        To: email, // Recipient's email address (the entered email)
        From: "rizwanzhad@gmail.com", // Your email address
        Subject: "Verification OTP for Woxen Food Management System", // Email subject
        Body: `Your verification code is: ${otp}`, // Email body containing the OTP
      }).then(
        message => alert(message)
      );
  
      // setShowSignUp(false); // Switch back to the Sign In form after successful sign up
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  

  return (
    <div className="body">
      <div className={`cont ${showSignUp ? "s-signup" : ".cont"}`}>
        <div className="form sign-in">
          <h2>Sign In</h2>
          <br />

          <label className="label">
            <span className="span">WOXSEN Email Address</span>
            <input
              className="input"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label">
            <span className="span">Password</span>
            <input
              className="input"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="submit" type="button" onClick={handleSignIn}>
            Sign In
          </button>
          <p className="forgot-pass">Forgot Password ?</p>
          {error && <p className="error">{error}</p>}
        </div>

        <div className="sub-cont">
          <div className="img">
            <div className="img-text m-up">
              <br />
              <br />
              <h2>New here?</h2>
              <p>
                Sign up if you are new here! and explore woxsen food management
              </p>
            </div>
            <div className="img-text m-in">
              <h2>Already have an Account</h2>
              <br />
              <br />
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img-btn" onClick={handleToggleForm}>
              <span className="m-up">Sign Up</span>
              <span className="m-in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Sign Up</h2>
            <label className="label">
              <span className="span">Name</span>
              <input
                className="input"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="label">
              <span className="span">WOXSEN Mail</span>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="label">
              <span className="span">Password</span>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <label className="label">
              <span className="span">Confirm Password</span>
              <input
                className="input"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
            <button type="button" className="submit" onClick={handleSignUp}>
              Sign Up Now
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpPage;