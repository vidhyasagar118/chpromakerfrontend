import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
        "https://chpromaker-backend.onrender.com/api/signup",
        form
      );

      setMessage(res.data.message || "Signup successful ✅");
      setForm({ name: "", email: "", password: "" });

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <div className="Signupcontainer">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <br />
        <button className="submit" type="submit">
          Signup
        </button>
      </form>
      <p>{message}</p>
      <p>
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          style={{
            background: "none",
            color: "blue",
            border: "none",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Login here
        </button>
      </p>
    </div>
  );
}

export default Signup;
