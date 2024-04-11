import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center w-full gap-2 px-4 py-6 border-t border-gray-700 sm:flex-row shrink-0 md:px-6">
      <p className="text-xs text-gray-400">
        © 2024 Healthcare. Code by <a href="https://www.linkedin.com/in/siddhesh-bhosale2000" className="underline">Siddhesh Bhosale</a>
      </p>
      <nav className="flex gap-4 sm:ml-auto sm:gap-6">
        <a className="text-xs hover:underline underline-offset-4" href="#">
          About Us
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="#">
          Services
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="#">
          Contact
        </a>
        <a className="text-xs hover:underline underline-offset-4" href="#">
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
