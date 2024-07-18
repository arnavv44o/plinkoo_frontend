// Uncomment these lines if you have react-icons installed
// import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#262522] border-t border-[#262522] py-6 text-white">
      <div className="w-[96%] max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* Uncomment and use the correct logo path */}
            {/* <img
              src="https://res.cloudinary.com/dcugqfvvg/image/upload/v1713647295/standardboard.1d6f9426_asqzum.png"
              className="h-8"
              alt="Plinkoo Logo"
            /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Plinkoo Game
            </span>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
        <div className="flex space-x-4">
          {/* Uncomment these lines if you have react-icons installed */}
          {/* <a href="https://github.com" className="hover:text-gray-400">
            <FaGithub size={20} />
          </a>
          <a href="https://twitter.com" className="hover:text-gray-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://youtube.com" className="hover:text-gray-400">
            <FaYoutube size={20} />
          </a> */}
          <a href="https://github.com" className="hover:text-gray-400">GitHub</a>
          <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
          <a href="https://youtube.com" className="hover:text-gray-400">YouTube</a>
        </div>
      </div>
    </footer>
  );
};
