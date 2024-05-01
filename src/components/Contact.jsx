import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export function Contact() {
  return (
    <div
      className="bg-black p-8 rounded-lg shadow-md text-white text-sm-2 container m-auto px-4"
      id="contact"
    >
      <h2 className="text-2xl font-semibold mb-8">Contact</h2>
      <div className="flex items-center mb-4">
        <FaEnvelope className="mr-2" />
        <span>Email:adithyana543@gmail.com</span>
      </div>
      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="mr-2" />
        <span>Location: Vaikom,Kottayam,Kerala, India</span>
      </div>
      <div className="flex items-center mb-4">
        <AiFillGithub className="mr-2" />
        <a
          target="blank"
          href="https://github.com/Adithyan1020/"
          className="text-white hover:underline"
        >
          GitHub: Adithyan1020
        </a>
      </div>
    </div>
  );
}
