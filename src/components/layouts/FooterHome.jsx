import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaDownload } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo Footer */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/img/logo.png" // Gantilah dengan URL atau path gambar logo Anda
            alt="Logo"
            className="h-17 w-12 mr-2"
          />
          <h1 className="text-2xl font-semibold">Wanwithyou</h1>
        </div>

        {/* Navigasi Footer */}
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li>
              <a href="#">Kontak</a>
            </li>
          </ul>
        </nav>

        {/* Ikon Media Sosial */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Ikon Download */}
        <a href="#" className="text-white hover:text-blue-500">
          <FaDownload size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
