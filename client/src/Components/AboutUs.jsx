
const AboutUs = () => {
  return (
    <div className="bg-[#ECF0F1] min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-[#34495E] mb-12">
          About Us
        </h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#34495E] mb-4">
              Our Mission
            </h2>
            <p className="text-[#7F8C8D]">
              Our mission is to provide the best solutions to help individuals
              and businesses achieve their goals. We believe in the power of
              technology and innovation to transform lives and create a better
              future.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#34495E] mb-4">
              Our Vision
            </h2>
            <p className="text-[#7F8C8D]">
              Our vision is to be a global leader in the industry, known for our
              commitment to quality, integrity, and customer satisfaction. We
              strive to exceed expectations and deliver exceptional value to
              our clients.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#34495E] mb-4">
              Our Team
            </h2>
            <p className="text-[#7F8C8D]">
              Our team is composed of passionate and talented individuals who
              are dedicated to making a positive impact. With diverse
              backgrounds and expertise, we work collaboratively to achieve our
              common goals and drive success for our clients.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#34495E] mb-4">
              Our Values
            </h2>
            <ul className="list-disc pl-5 text-[#7F8C8D]">
              <li>Integrity</li>
              <li>Innovation</li>
              <li>Customer Focus</li>
              <li>Excellence</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
