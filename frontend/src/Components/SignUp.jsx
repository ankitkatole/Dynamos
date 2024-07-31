import { NavLink, useNavigate } from 'react-router-dom';
import { FaTwitter, FaGoogle, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SERVER_URL from '../../constants';

const Signup = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();

    if(!name || !email || !password) {
      toast.error("Please fill the required fileds");
      return;
    }

    const res = await fetch(`${SERVER_URL}/auth/signUp`,
      {
          method:"POST",
          body:JSON.stringify({
              name,
              email,
              password,
          }),
          headers: {"Content-type": "application/json; charset=UTF-8",},
    });

    if(res.status == 200) {
      const data = await res.json();
      localStorage.setItem("token",data.token);
      localStorage.setItem("email",data.email);
      toast.success("Signup Successfully");
      navigate("/dashboard");
    } else if(res.status == 400) {
      toast.error("User already exists");
    } else {
      toast.error("Failed to signUp");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center "
      style={{ backgroundImage: `url(forestBackground.png)` }}
    >
      <div className="max-w-md w-full space-y-8 p-10 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg z-10 border border-gray-200 border-opacity-40">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-[#34495E]">Sign Up</h2>
        </div>
        <form className="mt-8 space-y-6 ">
          <div className="rounded-md shadow-sm -space-y-px flex flex-col gap-3">
            <div>
              <input
                name="username"
                type="text"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-xl bg-transparent focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] focus:z-10 sm:text-sm"
                placeholder="Username"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>
            <div>
              <input
                name="email"
                type="email"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-xl bg-transparent focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                required
                className="appearance-none  relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-xl bg-transparent focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1ABC9C] hover:bg-[#16A085] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1ABC9C]"
              onClick={signUp}
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-center mt-6">
            <div className="flex space-x-4">
              <a href="#" className="text-[#1ABC9C] hover:text-[#16A085]">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-[#1ABC9C] hover:text-[#16A085]">
                <FaGoogle size={24} />
              </a>
              <a href="#" className="text-[#1ABC9C] hover:text-[#16A085]">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
          <div className="text-center text-[#7F8C8D] mt-6">
            Already a user?{' '}
            <NavLink to="/login" className="text-[#1ABC9C] hover:text-[#16A085]">
              Login
            </NavLink>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
