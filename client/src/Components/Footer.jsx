import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-8 ">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/" className="hover:text-gray-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" className="hover:text-gray-400">
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" className="hover:text-gray-400">
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" className="hover:text-gray-400">
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="hover:text-gray-400">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Legal Links</h3>
          <ul>
            <li>
              <NavLink to="/privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-of-service" className="hover:text-gray-400">
                Terms of Service
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-2	">
          <h3 className="text-lg font-bold mb-4 ">Newsletter Signup</h3>
          <input
            type="text"
            placeholder="Full Name"
            className="block w-full bg-gray-700 text-white py-2 px-4 mb-2 rounded"
          />
          <input
            type="email"
            placeholder="Enter Email"
            className="block w-full bg-gray-700 text-white py-2 px-4 mb-2 rounded"
          />
          <button className="bg-[#1ABC9C] hover:bg-[#16A085] text-white py-2 px-4 rounded">
            Signup
          </button>
        </div>
        <div className="col-span-2 	">
          <h3 className="text-lg font-bold mb-4 ">Contact Information</h3>
          <p>137/09, Mars, Happy Crater.</p>
          <p>+25 251 981 3562</p>
          <p>digiwell@wellbeing.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 1668.56 1221.19"
                viewBox="0 0 1668.56 1221.19"
                id="twitter-x"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99 h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                  transform="translate(52.39 -25.059)"
                ></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 30 30"
                fill="#fff"
              >
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24H12.82v-9.294H9.692v-3.622h3.128V8.41c0-3.1 1.894-4.788 4.66-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.92.001c-1.504 0-1.795.715-1.795 1.764v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.324V1.324C24 .593 23.407 0 22.676 0z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M20.447 20.452H17.21v-5.569c0-1.327-.027-3.038-1.849-3.038-1.849 0-2.131 1.445-2.131 2.937v5.67H9.004V9h3.114v1.561h.043c.433-.82 1.493-1.684 3.07-1.684 3.284 0 3.89 2.162 3.89 4.975v6.6zM5.337 7.433c-1.025 0-1.854-.83-1.854-1.854s.83-1.854 1.854-1.854c1.023 0 1.854.83 1.854 1.854 0 1.024-.831 1.854-1.854 1.854zM7.122 20.452H3.553V9H7.12v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.204 24 24 23.226 24 22.271V1.729C24 .774 23.204 0 22.225 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        &copy; 2024 DigiWell. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
