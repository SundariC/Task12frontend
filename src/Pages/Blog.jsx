import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-xl w-[90%] max-w-3xl text-center shadow-lg">
        
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Our Website
        </h1>

        <p className="text-gray-700 mb-8">
          Share your thoughts, ideas and stories with the world.
        </p>
        {token ? (
          <button
            onClick={logout}
            className="bg-red-500 text-white px-6 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/login")}
              className="bg-black text-white px-6 py-2 rounded"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="border border-black px-6 py-2 rounded"
            >
              Register
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
