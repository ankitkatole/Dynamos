import { NavLink } from 'react-router-dom';
import { FaTwitter, FaGoogle, FaFacebook } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SERVER_URL from '../../constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if(!email || !password) {
      toast.error("Please fill the required fileds");
      return;
    }

    const res = await fetch(`${SERVER_URL}/auth/login`,
      {
          method:"POST",
          body:JSON.stringify({
              email,
              password,
          }),
          headers: {"Content-type": "application/json; charset=UTF-8",},
    });

    if(res.status == 200) {
      const data = await res.json();
      localStorage.setItem("token",data.token);
      localStorage.setItem("email",data.email);
      toast.success("Login Successfully");
      navigate("/dashboard");
    } else if(res.status == 400) {
      toast.error("Create your account first");
    } else if(res.status == 401) {
      toast.error("Incorrect Password");
    } else {
      toast.error("Failed to login");
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-cover bg-center "
      style={{ backgroundImage: `url(forestBackground.png)` }}
    >
      <div className="max-w-md w-full space-y-8 p-10 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-xl shadow-lg z-10 border border-gray-200 border-opacity-40">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-[#34495E]">Login</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md  flex flex-col gap-4">
            <div >
              <input
                name="email"
                type="email"
                required
                className="appearance-none rounded-xl bg-transparent relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                required
                className="appearance-none rounded-xl bg-transparent relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-[#1ABC9C] focus:border-[#1ABC9C] focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-[#1ABC9C] focus:ring-[#1ABC9C] border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-[#1ABC9C] hover:text-[#16A085]">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#1ABC9C] hover:bg-[#16A085] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1ABC9C]"
              onClick={handleLogin}
            >
              Login
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
           {" Don't have an account? "}
            <NavLink to="/signup" className="text-[#1ABC9C] hover:text-[#16A085]">
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
