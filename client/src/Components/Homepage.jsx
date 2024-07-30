import { NavLink } from "react-router-dom";
const testimonials = [
  {
    quote: "This app has significantly improved my work-life balance. I can now easily track my productivity and take necessary breaks without feeling guilty.",
    name: "Alex Johnson"
  },
  {
    quote: "The tools provided by this app are essential for anyone looking to improve their digital wellbeing. Highly recommended!",
    name: "Sarah Williams"
  },
  {
    quote: "I love how easy it is to use and the positive impact it has had on my productivity and mental health.",
    name: "Michael Brown"
  },
  // Add more testimonials as needed
];

const Homepage = () => {
  return (
    <div className="border w-full min-h-screen">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5/>
    </div>
  );
};

export default Homepage;

const Frame1 = () => {
  return (
    <div className="w-full pt-16 h-full md:h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-[#ECF0F1] relative px-4 md:px-16">
      <img
        src="Meditating man.png"
        alt="Meditating Man"
        className="w-full md:w-2/5 lg:w-1/3"
      />
      <img
        src="sea background.png"
        alt="Birds"
        className="absolute top-20 right-10 md:top-24 md:right-32 w-3/5 md:w-2/5 lg:w-2/4"
      />
      <div className="text-center md:text-left mt-0 md:mt-0 flex flex-col gap-2 justify-center items-center bg-[#ECF0F1] z-20 w-full md:w-auto">
        <p className="font-bold text-2xl md:text-3xl lg:text-4xl font-serif">
          <span className="text-[#1ABC9C]">WELLBEING</span>
          <span className="text-[#34495E]"> tools</span>
        </p>
        <p className="text-[#7F8C8D] font-sans text-base md:text-lg lg:text-xl">
          for the modern Remote worker
        </p>
        <div className="mt-6 flex gap-4 md:gap-6">
          <NavLink
            to="/login"
            className="bg-[#1ABC9C] hover:bg-[#16A085] text-white font-bold py-2 px-6 rounded text-lg"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="bg-gray-300 hover:bg-gray-400 text-[#34495E] font-bold py-2 px-6 rounded text-lg"
          >
            Signup
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Frame2 = () => {
  return (
    <div className="w-full lg:h-full md:h-1/2 bg-[#ECF0F1] border p-4 pt-12 md:p-12 lg:p-16 flex justify-center items-center md:flex-row flex-col">
      <div className="w-full md:w-1/3  text-center md:text-left">
        <p className="text-[#7F8C8D] font-sans mb-2">Digital Wellbeing</p>
        <p className="font-bold text-xl md:text-3xl lg:text-4xl  font-serif text-[#34495E]">
          New ways to find balance for you and your family.
        </p>
      </div>
      <img
        src="Group 580.png"
        alt="Woman meditating"
        className="w-full md:w-auto md:h-64 lg:h-96 object-cover"
      />
    </div>
  );
};

const Frame3 = () => {
  return (
    <section className="w-full text-center bg-[#ECF0F1] h-full md:h-screen">
      <div className="relative w-full">
        <p
          className="font-bold font-inter h-auto text-transparent w-full italic tracking-wide text-8xl sm:text-5xl md:text-6xl lg:text-13xl "
          style={{
            background: "linear-gradient(to right, #999999 20%, #a5f3e3 53%)",
            WebkitBackgroundClip: "text",
          }}
        >
          RELAX.
        </p>
        <span className="text-[#7F8C8D] mb-12 font-sans text-base sm:text-lg md:text-xl absolute   bottom-0  lg:right-1/5 lg:translate-x-0  lg:translate-y-0  translate-y-9">
          This is your cue to unplug.
        </span>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 p-8 w-full">
        <div
          className="bg-[#F5F5F5] rounded-lg p-4 shadow-md w-full md:w-1/5 h-48 md:h-64 mx-2 flex flex-col justify-between"
          style={{
            background: "linear-gradient(to bottom, #CDCDCD 40%, grey 100%)",
          }}
        >
          <p className="font-bold text-base md:text-xl font-serif text-[#2C3E50]">
            Unplug
          </p>
          <img
            src="Group 582.png"
            alt="dotted line"
            className="w-full object-contain  h-4/5 "
          />
        </div>
        <div
          className="bg-[#F5F5F5] rounded-lg p-4 shadow-md w-full md:w-1/5 h-48 md:h-64 mx-2 flex flex-col justify-between"
          style={{
            background: "linear-gradient(to bottom, #CDCDCD 40%, grey 100%)",
          }}
        >
          <p className="font-bold text-base md:text-xl font-serif text-[#2C3E50]">
            Productivity
          </p>
          <img
            src="track line.png"
            alt="track line"
            className="w-full object-contain h-4/5"
          />
        </div>
        <div
          className="bg-[#F5F5F5] rounded-lg p-4 shadow-md w-full md:w-1/5 h-48 md:h-64 mx-2 flex flex-col justify-between"
          style={{
            background: "linear-gradient(to bottom, #CDCDCD 40%, grey 100%)",
          }}
        >
          <p className="font-bold text-base md:text-xl font-serif text-[#2C3E50]">
            Re-balance
          </p>
          <img
            src="Line 9.png"
            alt="Line 9"
            className="w-full object-contain h-4/5 "
          />
        </div>
        <div
          className="bg-[#F5F5F5] rounded-lg p-4 shadow-md w-full md:w-1/5 h-48 md:h-64 mx-2 flex flex-col justify-between"
          style={{
            background: "linear-gradient(to bottom, #CDCDCD 40%, grey 100%)",
          }}
        >
          <p className="font-bold text-base md:text-xl font-serif text-[#2C3E50]">
            Sabbatical
          </p>
          <img
            src="dotted line.png"
            alt="dotted line"
            className="w-full object-contain h-4/5"
          />
        </div>
      </div>
    </section>
  );
};

const Frame4 = () => {
  return (
    <div className="w-full bg-[#ECF0F1] flex flex-col md:flex-row items-center justify-center gap-8 py-16 px-4 md:px-8 lg:px-16">
      <div className="md:w-1/2 text-center md:text-left w-full">
        <p className="text-[#7F8C8D] font-sans mb-2">Productivity</p>
        <h4 className="text-[#34495E] font-bold text-2xl md:text-3xl lg:text-4xl font-serif mb-4 md:mb-6">
{          // eslint-disable-next-line react/no-unescaped-entities
}          At your fingertips. Tracks your friends' progress. No more digital
          burnout.
        </h4>
      </div>
      <img
        src="MacBook Air (2022).png"
        alt="MacBook Air"
        className="md:w-1/2 w-full max-w-md object-cover"
      />
    </div>
  );
};


const Frame5 = () => {
  return (
    <div className="w-full bg-[#ECF0F1] py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#34495E] mb-8">
        Testimonials
      </h2>
      <div className="w-full flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-12 w-full md:w-1/3 lg:w-1/4">
            <p className="text-[#7F8C8D] mb-4">
{              // eslint-disable-next-line react/no-unescaped-entities
}              "{testimonial.quote}"
            </p>
            <p className="text-[#34495E] font-bold">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



