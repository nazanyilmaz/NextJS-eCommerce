import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-24 bg-orange-600 text-slate-100 flex items-center justify-center px-5 mt-3 md:mt-10 font-extrabold">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white hover:text-gray-300">
          <FaFacebook />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaTwitter />
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          <FaInstagram />
        </a>
      </div>
      <div className="ml-auto">
        <span className="text-gray-300">
          © 2024 Shopping.com All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
