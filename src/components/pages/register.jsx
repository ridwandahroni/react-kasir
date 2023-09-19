import { Link } from "react-router-dom";
import Footer from "../layouts/Footer";

function Register() {
  
    return (
      <>
      <section id="login" className="px-4 mb-28 mt-10 font-sans">
      <div className="container">
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 m-5 hidden sm:block lg:block xl:block">
             <img src="./img/hero2.svg" alt="" />
          </div>
          <div className=" w-full px-4 lg:w-1/2 xl:w-1/2 sm:w-1/2 ">
              <div className=" border-2 rounded-md shadow-sm p-16 mb-5">
                  <h3 className="text-center text-2xl mb-5 font-semibold text-blue-500 font-kaushan">Tokoku</h3>
                  <input type="text" placeholder="Username or email" className="w-full bg-slate-100 text-black p-3 rounded-md focus:outline-none focus:ring-blue-500 focus:ring-1 focus:border-blue-500 mb-2" />
                  <input type="password" placeholder="Password" className="w-full bg-slate-100 font-sans text-black p-3 rounded-md focus:outline-none focus:ring-blue-500  focus:ring-1 focus:border-blue-500  mb-3"/>
                  
                  <button type="button" className="text-base font-semibold text-white bg-blue-400 py-3 px-8 rounded-md w-full shadow-sm mb-5  "> <Link to='/login' className="text-white font-bold">Masuk</Link></button>
                  
                  <a href="#" className="text-center text-lg mb-5 text-slate-400">Lupa Password?</a>
              </div>
              <div className="border-2 rounded-md shadow-sm p-10  ">
                  <h2 className="text-center text-xl">Sudah punya akun? <Link to='/login' className="text-blue-500 font-bold">Login</Link></h2>
              </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
      </>
    );
  }
  
  export default Register;
  