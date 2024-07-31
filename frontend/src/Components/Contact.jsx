import {React, useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SERVER_URL from "../../constants";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const contactUs = async (e) => {
    e.preventDefault();
    if(!name || !email || !subject || !message){
      toast.error("Please fill required fields");
      return;
    }

    console.log(name,email,subject,message);

    const res = await fetch(`${SERVER_URL}/contactUs`,
      {
          method:"POST",
          body:JSON.stringify({
              name,
              email,
              subject,
              message,
          }),
          headers: {"Content-type": "application/json; charset=UTF-8",},
    });

    if(res.ok) {
      toast.success("Message sent successfully!");
    } else {
      toast.error("Failed to sent message!");
    }
  }

  return (
    <div className="bg-[#ECF0F1] min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#34495E] mb-12">
          Contact Us
        </h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-[#34495E] font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-[#34495E] font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-[#34495E] font-bold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                required
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-[#34495E] font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full border border-gray-300 px-3 py-2 rounded-lg"
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#1ABC9C] hover:bg-[#16A085] text-white font-bold py-2 px-4 rounded-lg"
              onClick={contactUs}
            >
              Send Message
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
