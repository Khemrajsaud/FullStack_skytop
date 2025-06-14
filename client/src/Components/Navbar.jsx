import { useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


import { Link, useLocation } from "react-router-dom";

import skytop from "../assets/Image/skytop log.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Program", path: "/programs" },
    { name: "Teams", path: "/teams" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contacts";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow z-50 ">
      {/* Top Bar */}
      <div className="bg-blue-500 text-white px-4 py-3 flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
        <div className="lg:flex items-center flex gap-2 mt-3">
          <FaPhoneAlt />
          <span>9865616815 </span>
        <IoLogoWhatsapp className="text-[#c7c1f1]"/>
        <span>9865616815</span>
        </div>
      


        <div className="hidden lg:flex items-center gap-3 p-2  ">
       
          <Link to="/login" >Login</Link>
          <Link to="/signup" >SignUp</Link>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-white shadow-md py-2 px-6 flex items-center justify-between">
        <img src={skytop} alt="Logo" className="w-[200px] md:w-[250px]" />
        <nav className="hidden md:flex gap-6 text-black font-medium">
        {
            navLinks.map((item,index)=>(
              <Link key={index }
              to={item.path}
              className="hover:text-blue-500"
              
              >
                {item.name}
              
              </Link>
            ))
          }
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col text-center  bg-white shadow-lg p-4 space-y-4 ">
          
          {
            navLinks.map((item,index)=>(
              <Link key={index }
              to={item.path}
              onClick={()=>setIsOpen(false)}
              className={`hover:text-blue-500 ${isContactPage} ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white rounded px-2 py-1 font-bold inline-block"
                  : ""
              }`}
              >
                {item.name}
              
              </Link>
              
            ))
          }

          

        <div className="flex items-center justify-center gap-3 p-2  ">
       
          <Link className=" bg-sky-500 px-3 py-1 text-white font-semibold rounded-md" to="/login" >Login</Link>
          <Link className=" bg-sky-500 px-3 py-1 text-white font-semibold rounded-md" to="/signup" >SignUp</Link>
        </div>
          
        </div>
      )}
    </div>
  );
};

export default Navbar;
