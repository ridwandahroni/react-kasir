import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Order() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold mb-6">
          <Link to="/">
            <span className="text-black">
              <FaArrowLeft className="inline-block mr-2" />
            </span>
          </Link>
          Pesanan Anda</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Produk</h2>
            <div className="flex items-center mb-4">
              <img
                src="https://down-id.img.susercontent.com/file/id-11134207-7qul9-lilwrahe2q1j5e"
                alt="Instax Mini 90 Neo Classic"
                className="w-16 h-16 object-cover rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-lg font-medium">Instax Mini 90 Neo Classic</h3>
                <p className="text-gray-600">$144.99</p>
              </div>
            </div>
            {/* Tambahkan produk lain jika diperlukan */}
          </div>
          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Checkout</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="cardholderName">Cardholder's Name</label>
              <input
                type="text"
                id="cardholderName"
                name="cardholderName"
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-2" htmlFor="cardNumber">Card Number</label>
              <input
                type="number"
                id="cardNumber"
                name="cardNumber"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <img
                src="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"
                alt="Visa Logo"
                className="w-8 h-8 mt-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 text-sm mb-2" htmlFor="expDate">Expiration Date</label>
                <input
                  type="month"
                  id="expDate"
                  name="expDate"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm mb-2" htmlFor="cvv">CVV</label>
                <input
                  type="number"
                  id="cvv"
                  name="cvv"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
