import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../Services/api";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    try {
      setLoading(true);
      const response = await api.post("/auth/forgot-password", { email });

      toast.success(response.data.message || "Reset link sent to your email");
      setError(null);
      setTimeout(() => {
        navigate("/login");
      }, 2000);

    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong. Try again!";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
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
        className="max-w-md mx-auto bg-white p-8 shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl mb-4 font-bold font-serif text-center">
          Forgot Password
        </h2>

        {error && (
          <div className="bg-red-100 p-3 mb-4 text-red-600 rounded">
            {error}
          </div>
        )}

        <label className="block font-bold mb-2 font-serif" htmlFor="email">
          Email
        </label>
        <input
          className="w-full p-2 border border-gray-300 mb-4 rounded"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white rounded font-bold font-serif p-2 text-xl disabled:opacity-50"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        <div className="p-2 text-red-600 font-bold font-serif mt-4 text-center">
          Password Remembered? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
