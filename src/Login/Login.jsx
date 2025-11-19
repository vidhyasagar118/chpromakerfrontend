import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Render backend URL
      const res = await axios.post(
        "https://chpromaker-backend.onrender.com/api/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      setMessage("Login Successful ✅");

      navigate("/");
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="Logincontainer">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <br />
        <button className="submit" type="submit">
          Login
        </button>
      </form>
      <p>{message}</p>
      <p>
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/signup")}
          style={{
            background: "none",
            color: "blue",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Register
        </button>
      </p>
    </div>
  );
}

export default Login;
