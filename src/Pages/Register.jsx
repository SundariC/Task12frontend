import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../Services/api";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ error, setError] = useState(null);
    const [ showPassword, setShowPassword] = useState(false)
    
    const handleSubmit = async(e) => {
       e.preventDefault(); 
       try {
        const response = await api.post("/auth/register", {name, email, password});
        toast.success(response.data.message);
        setError(null);
        navigate("/Login");
       } catch (error) {
        setError(error.response.data.message);
        toast.error(error.response.data.message)
       }
       setName("");
       setEmail("");
       setPassword("");
    };
    return (
        <div className = 'container mx-auto mt-8'>
            <form className = 'max-w-md mx-auto bg-blue-100 p-4 shadow-blue-600'onSubmit={handleSubmit}>
                <h2 className = 'text-2xl mb-4 font-bold font-sans'>Register</h2>
                {error && (
                    <div className = " p-3 text-red-600 rounded">
                        {error}
                    </div>
                )}
                <p>
                    <label className="block font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                    className = "w-full p-2 border border-blue-300 rounded outline-blue-600"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your Name"
                    />
                </p>
               <p>
                    <label className="block font-bold mb-2" htmlFor="name">
                        Email
                    </label>
                    <input 
                    className = "w-full p-2 border border-blue-300 rounded outline-blue-600"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    />
                </p>
                 <p>
                    <label className="block font-bold mb-2" htmlFor="name">
                        Password
                    </label>
                    <input 
                    className = "w-full p-2 border border-gray-300 rounded outline-blue-600"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    />
                    <button 
                    type="button"
                    onClick={()=> setShowPassword(!showPassword)}
                    className="">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </p>
                <button 
                    type="submit"
                    className="w-full bg-blue-400 font-bold rounded font-serif text-amber-200 p-2">
                       Register
                    </button>
                    <div className = "p-2 mb-4 text-red-700">Already have an account? <a href = "/login">Login</a></div>
            </form>
        </div>
    );
};

export default Register;