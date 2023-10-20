import React, { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import "./Login.css";
import axios from "axios";
import { URL } from "../../helper";
import Footer from "../../components/Footer/Footer";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookies?.get("user");
    console.log(cookie);
    if (cookie) {
      const user = JSON.parse(cookie);
      console.log(user);
      if (user.token) {
        Navigate("/");
      }
    }
  }, []);

  const handleLogin = async () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setError("Please provide a valid email address");
      return;
    }
    if (!email || !password) {
      setError("Please provide email and password");
      return;
    }
    setError("");
    await axios
      .post(`${URL}/login`, { email, password })
      .then((res) => {
        Cookies.set("user", JSON.stringify(res.data));
        navigate("/");
        setEmail("");
        setPassword("");
      })
      .catch((err) => setError(err.response.data.message));
  };
  return (
    <div className="login-parent">
      <NavbarComponent />
      <div className="login-main">
        <div className="login-container">
          <h2>Login</h2>
          <div className="email">
            <label htmlFor="email">Email</label>
            <br />{" "}
            <input
              type="text"
              name=""
              id="email"
              placeholder="Email id"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name=""
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="error">{error}</div>

          <button onClick={handleLogin}>
            <span>LOGIN</span>
          </button>
          <div className="else">
            <div>Not a member?</div>
            <a href="/register">SIGN UP</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
