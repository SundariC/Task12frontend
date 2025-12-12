import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ error, setError] = useState(null);
    const [ showPassword, setShowPassword] = useState(false)
    return (
        <div className = 'container mx-auto mt-8'>
            <form className = 'max-w-md mx-auto bg-amber-300 p-4'>
                <h2 className = 'text-2xl mb-4 font-bold font-sans'>Register</h2>
                {error && (
                    <div className = "bg-red-100 p-3 text-red-600 rounded">
                        {error}
                    </div>
                )}
                <p>
                    <label className="block font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                    className = "w-full p-2 border border-gray-300 rounded"
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
                    className = "w-full p-2 border border-gray-300 rounded"
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
                    className = "w-full p-2 border border-gray-300 rounded"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    />
                    <br />
                    <br />
                    <button 
                    type="button"
                    onClick={()=> setShowPassword(!showPassword)}
                    className="p-2 my-3 bg-blue-500 text-amber-200">
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </p>
                <button 
                    type="submit"
                    onClick={()=> setShowPassword(!showPassword)}
                    className="w-full bg-pink-400 font-bold rounded font-serif text-amber-200 p-2">
                       Register
                    </button>
            </form>
        </div>
    );
};

export default Register;