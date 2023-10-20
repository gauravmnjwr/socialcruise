import React, { useEffect, useState } from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import axios from "axios";
import { URL } from "../../helper";
import Footer from "../../components/Footer/Footer";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const cookie = Cookies?.get("user");
    console.log(cookie);
    if (cookie) {
      const user = JSON.parse(cookie);
      if (user.token) {
        navigate("/");
      }
    }
  }, []);

  const handleLogin = async () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setError("Please provide a valid email address");
      return;
    } else if (password !== confPassword) {
      setError("Passwords do not match");
      return;
    } else if (!password || !email) {
      setError("Please fill all the fields");
      return;
    } else {
      await axios
        .post(`${URL}/signup`, { email, password })
        .then((res) => {
          setEmail("");
          setPassword("");
          Cookies.set("user", JSON.stringify(res.data));
          navigate("/");
        })
        .catch((err) => setError(err.response.data.message));
    }
  };
  return (
    <div className="login-parent">
      <NavbarComponent />
      <div className="login-main">
        <div className="login-container">
          <h2>Register</h2>
          <div className="email">
            <label htmlFor="email">Email</label>
            <br />{" "}
            <input
              type="email"
              name=""
              id="email"
              placeholder="Email id"
              onChange={(e) => setEmail(e.target.value)}
              required
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
          <div className="password">
            <input
              type="password"
              name=""
              id="password"
              placeholder="Confirm Your Password"
              onChange={(e) => setConfPassword(e.target.value)}
            />
          </div>
          <div className="error">{error}</div>

          <button onClick={handleLogin}>
            <span>Register</span>
          </button>
          <div className="else">
            <div>Already a member?</div>
            <a href="/login">SIGN IN</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
