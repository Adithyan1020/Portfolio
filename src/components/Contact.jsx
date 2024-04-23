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
        <span>Email: hariraghavan2096@gmail.com</span>
      </div>
      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="mr-2" />
        <span>Location: Chennai, India</span>
      </div>
      <div className="flex items-center mb-4">
        <AiFillGithub className="mr-2" />
        <a
          target="blank"
          href="https://github.com/Hari-Vijayaraghavan96"
          className="text-white hover:underline"
        >
          GitHub: github.com/Hari-Vijayaraghavan96
        </a>
      </div>
    </div>
  );
}
