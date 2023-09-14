import { useState } from "react";

function CardCheckout() {
  // State untuk menyimpan nilai angka
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah angka
  const increment = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mengurangi angka
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="w-full px-2  ">
        <div className="bg-white rounded-md w-full p-2 overflow-hidden border-black border-2 m-4 flex">
          <img
            src="https://source.unsplash.com/200x200?product+snack"
            alt="food"
            className="w-1/2 "
          />
          <div className="py-6 px-6 w-1/2">
            <h3 className=" mb-3 font-semibold text-lg text-dark">
              Lorem ipsum dolor sit amet.
            </h3>

            <p className="font-medium text-base mb-4 text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non!
            </p>
            <div className=" w-1/2 items-center flex justify-around">
              <button
                onClick={decrement}
                className="bg-slate-100  px-2 text-lg font-semibold"
              >
                -
              </button>
              <p className="px-3">{count}</p>
              <button
                onClick={increment}
                className="bg-slate-100  px-2 text-lg font-semibold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardCheckout;
