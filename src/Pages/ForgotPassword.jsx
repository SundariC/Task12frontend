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
      const response = await api.post("/auth/forgot-password", { email });
      toast.success(response.data.message);
      setError(null);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
    setEmail("");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
    >
      <form
        className="max-w-md mx-auto bg-blue-100 p-4"
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
            className="w-full p-2 border border-blue-300 rounded outline-blue-600"
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
          className="w-full mt-3 bg-blue-400 font-bold rounded font-serif text-amber-200 p-2"
        >
          Submit
        </button>
        <div className=" p-2 mb-4 text-red-600">
          Password Remembered? <a href="/Login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
