import { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";
import Navbar from '../Webpage-Components/Navbar';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/forgotpassword",
        { email },
        config
      );

      setSuccess(data.data);
    } catch (error) {
      setError(error.response.data.error);
      setEmail("");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    
    <div className="forgotpassword-screen">
        <Navbar/>
      <form
        onSubmit={forgotPasswordHandler}
        className="forgotpassword-screenform"
      >
        <h3 className="forgotpassword-screentitle">Forgot Password</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="form-group">
          <p className="forgotpassword-screen__subtext">
            Please enter the email address you registered your account with. You will receive an email with
            instructions on how to change your password.
          </p>
          <label htmlFor="email">Email:&nbsp;&nbsp;</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="forgotpassword-btn">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;