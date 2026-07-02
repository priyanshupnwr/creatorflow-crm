import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { registerUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

function Register() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const handleRegister=async(e)=>{
    e.preventDefault();

    try{

      const data=await registerUser({
        name,
        email,
        password
      });

      login(data);

      toast.success("Registration Successful");

      navigate("/");

    }
    catch(error){

      toast.error(
        error.response?.data?.message || "Registration Failed"
      );

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          CreatorFlow
        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded-lg p-3"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg p-3"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <button
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Register;