import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaList } from "react-icons/fa";

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <nav className="bg-slate-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <img src="./img/logo.png" alt="Logo" className="w-24 h-12" />
        </div>

        {/* Search Bar */}
        <div className="bg-white flex items-center rounded-full px-4 py-2 w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent focus:outline-none"
          />
          <button className="text-slate-500 hover:text-blue-700 focus:outline-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.78-4.78M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigasi dengan Ikon */}
        <ul className="flex space-x-4 text-white">
          <li>
            <Link to="/">
              <FaHome className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link to="/other">
              <FaList className="w-6 h-6" />
            </Link>
          </li>
        </ul>

        {/* Profil */}
        <div className="flex items-center space-x-2">
          <img
            src="./img/avatar.png"
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={openPopup}
          />
          <span
            className="text-white cursor-pointer"
            onClick={openPopup}
          >
            Ridwan D
          </span>
        </div>

        {/* Pop-up Login dan Registrasi */}
        {isPopupOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-50 bg-gray-900">
            <div className="bg-white p-8 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Login or Register</h2>
              {/* Avatar */}
              <div className="flex justify-center mb-4">
                <img
                  src="./img/avatar.png"
                  alt="Avatar"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              {/* Pilihan Login */}
              <button className="bg-blue-500 text-white py-2 px-4 rounded mb-4 w-full hover:bg-blue-600">
                Login
              </button>
              {/* Pilihan Register */}
              <button className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600">
                Register
              </button>
              <button
                onClick={closePopup}
                className="bg-red-500 text-white py-2 px-4 rounded mt-4 w-full hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
