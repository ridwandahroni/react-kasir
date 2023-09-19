import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "../layouts/Header";
import KategoriProduk from "../components/KategoriProduk";
import CardKategori from "../components/card-kategori";
import FooterHome from "../layouts/FooterHome";
import Popup from "../components/Popup"; // Pastikan path impor benar

function Home() {
  useEffect(() => {
    AOS.init();

    // Mengubah atribut class dari elemen-elemen dengan data-carousel-item
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    carouselItems.forEach(item => {
      item.classList.remove('hidden');
    });
  }, []);

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  

  return (
    <>
      <Header />
      <section className="px-20 mt-5">
        <div className="container">
          <div className="w-full px-4  border-b-2 mb-20">
            <div className="">
              <span className=" rounded-sm h-10 w-1/2 mx-auto ">

                <div id="gallery" class="relative w-full" data-carousel="slide">
                  {/* <!-- Carousel wrapper --> */}
                  <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="./img/banner4.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt=""/>
                    </div> 
                    {/* <!-- Item 2 --> */} 
                    <div class="hidden duration-700 ease-in-out" data-carousel-item> 
                      <img src="./img/banner.png" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                    </div> 
                    {/* <!-- Item 3 --> / */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item> 
                      <img src="./img/banner3.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                    </div> 
                    {/* <!-- Item 4 --> / */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="./img/banner5.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                    </div> 
                    {/* <!-- Item 5 --> / */}
                    <div class="hidden duration-700 ease-in-out" data-carousel-item>
                      <img src="./img/banner1.jpg" class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="" />
                    </div>
                  </div>
                  {/* <!-- Slider controls --> */}
                  <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                      </svg>
                      <span class="sr-only">Previous</span>
                    </span>
                  </button>
                  <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <span class="sr-only">Next</span>
                    </span>
                  </button>
                </div>

              </span>
            </div>
          </div>
          <div className="App">
            {/* Komponen lain */}
            <KategoriProduk />
            {/* Komponen lain */}
          </div>
          <div className="w-full px-4  ">
            <h1 className="p-3 bg-secondary w-1/6 rounded-2xl text-center mb-5">
              Kategori 1
            </h1>
            <div className="flex" data-aos="fade-down-right"
              data-aos-easing="linear"
              data-aos-duration="900">
              <CardKategori />
              <CardKategori />
              <CardKategori />
              <CardKategori />
            </div>
          </div>
          <div className="w-full px-4 mt-8 ">
            <h1 className="p-3 bg-secondary w-1/6 rounded-2xl text-center mb-5">
              Kategori 2
            </h1>
            <div className="flex">
              <CardKategori />
              <CardKategori />
              <CardKategori />
              <CardKategori />
            </div>
          </div>
        </div>
      </section>
      {/* <button
        className="fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
        onClick={openPopup}
      >
        Team
      </button> */}
      {showPopup && <Popup closePopup={closePopup} />} {/* Menampilkan pop-up jika showPopup adalah true */}
      <FooterHome />
    </>
  );
}

export default Home;
