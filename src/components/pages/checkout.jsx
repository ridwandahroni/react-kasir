import React, { useState } from 'react';
import Header from '../layouts/Header';
import Cardkategori2 from '../components/card-kategori2';
import FooterHome from "../layouts/FooterHome";


const Checkout = () => {
  const [form, setForm] = useState({
    nama: '',
    alamat: '',
    email: '',
    nomorTelepon: '',
    metodePembayaran: 'kartuKredit',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan logika pengiriman pesanan di sini
  };

  return (
    <>
      <Header />
      <div className="flex my-10">
        <ul className="flex space-x-4 mx-10 text-xl">
          <li className='hover:text-slate-500'><a href="">All</a></li>
          <li className='hover:text-slate-500'><a href="">Jacket</a></li>
          <li className='hover:text-slate-500'><a href="">Sepatu</a></li>
          <li className='hover:text-slate-500'><a href="">Topi</a></li>
          <li className='hover:text-slate-500'><a href="">T-Shirt</a></li>
        </ul>
      </div>

      <div className="pl-10 -mt-12">
        <div class="mt-16">
          <div>
            <h1 className='text-slate-500 text-xl'> # Fashion</h1>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div className="relative">
                <div className="relative">
                  <div className="relative">
                    <img
                      className="h-auto w-72 rounded-lg"
                      src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                      alt=""
                    />
                    
                    <button
                      className="bg-white border-2 hover:bg-black hover:text-white border-black border-x-black-500 text-black px-4 py-2 rounded-lg absolute bottom-8 left-1/2 transform -translate-x-1/2 translate-y-1/2 transition-colors duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[990px] h-[420px] -mt-[420px] ml-[360px] ">
        <Cardkategori2 />
        <Cardkategori2 />
        <Cardkategori2 />
        <Cardkategori2 />
      </div>

      {/* iklan */}
      <div className="iklan">
      <span className=" rounded-sm w-1/2 mx-auto max-h-10">
        <img className='mt-10 py-1 px-2 ' src="./img/banner3.jpg" alt="" />
      </span>
      </div>

      <section className="section__container brands__container ">
      <div className="grid grid-cols-6 ">
        {Array(6)
          .fill()
          .map((_, index) => (
            <div className="brand__image" key={index}>
              <img
                src="./img/logo2.png"
                alt="brand"
                className="max-w-120px  px-10 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
            </div>
          ))}
      </div>
    </section>
    <FooterHome />
    </>
  );
};

export default Checkout;
