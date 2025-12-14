import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../Services/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/auth/reset-password/${id}/${token}`, {
        password,
      });
      toast.success(response.data.message);
      setError(null);
      navigate("/login");
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    }
    setPassword("");
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
        <h2 className="text-2xl mb-4 font-bold font-sans">Reset Password</h2>
        {error && (
          <div className="bg-red-100 p-3 text-red-600 rounded">{error}</div>
        )}
        <p>
          <label className="block font-bold mb-2" htmlFor="name">
            Password
          </label>
          <input
            className="w-full p-2 border border-blue-300 rounded outline-blue-600"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className=""
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </p>
        <button
          type="submit"
          className="w-full bg-blue-400 font-bold rounded font-serif text-amber-200 p-2"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
