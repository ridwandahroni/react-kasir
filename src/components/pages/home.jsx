import IconBtn from "../components/KategoriProduk";
import CardKategori from "../components/card-kategori";
import FooterHome from "../layouts/FooterHome";
import Header from "../layouts/Header";
import KategoriProduk from "../components/KategoriProduk";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Impor file CSS AOS
import { useEffect } from "react";


function Home() {
    useEffect(() => {
      AOS.init(); // Inisialisasi AOS
    }, []);
  return (
    <>
      <Header />
      <section className="px-20 mt-5">
        <div className="container">
          <div className="w-full px-4  border-b-2 mb-20">
            <div className="">
              <span className=" rounded-sm h-10 w-1/2 mx-auto ">
                <img src="./img/banner1.jpg" alt="" className="h-full w-full object-cover rounded-md" />
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
            <div className="flex"  data-aos="fade-down-right"
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
      <FooterHome />
    </>
  );
}

export default Home;
