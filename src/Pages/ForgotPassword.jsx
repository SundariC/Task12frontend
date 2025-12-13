import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../Services/api";


const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);

      const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/auth/login",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);
      toast.success(response.data.message);
      setError(null);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
    setEmail("");
    setPassword("");
  };
  
    return (
        <div className="container mx-auto mt-8">
      <form
        className="max-w-md mx-auto bg-amber-300 p-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 font-bold font-sans">Forgot Password</h2>
        {error && (
          <div className="bg-red-100 p-3 text-red-600 rounded">{error}</div>
        )}
        <p>
          <label className="block font-bold mb-2" htmlFor="name">
            Email
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
        </p>
        <button
          type="submit"
          className="w-full bg-pink-400 font-bold rounded font-serif text-amber-200 p-2"
        >
          Submit
        </button>
        <div className="bg-red-100 p-2 mb-4 text-red-300">
          Password Remembered? <a href="/Login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;