import React, { useState } from 'react';

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl font-semibold">Menu</h2>
        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <ul className="p-4">
        <li className="mb-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">Item 1</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">Item 2</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">Item 3</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-800 hover:text-blue-500">Item 4</a>
        </li>
      </ul>
    </div>
  );
};

export default SlideMenu;
