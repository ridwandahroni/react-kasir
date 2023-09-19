import React, { useState } from 'react';
import {FaWindowClose} from 'react-icons/fa';

const Popup = () => {
    const [showPopup, setShowPopup] = useState(true);

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
{showPopup && (
  <div className="pembungkus">
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <button
        className="relative -top-[50px] left-[27rem] cursor-pointer text-blue-700-500 text-xl hover:text-gray-700"
        onClick={closePopup}
      >
        <FaWindowClose/>
      </button>
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Ouwner Website Ini</h2>
        <img src="./img/avatar.png" alt="" className='h-28 mr-3'/>
      </div>
    </div>
  </div>
)}


        </>
    );
};

export default Popup;
