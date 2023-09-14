
function CardKategori() {
    return (
        <>
         <div className="max-w-xs rounded overflow-hidden shadow-lg mx-2 my-2 ">
              <img
                src="https://source.unsplash.com/200x200?t-shirtgi"
                alt="Product"
                className="w-full hover:scale-110 ease-in-out duration-100"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Nama Produk</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, veniam.
                </p>
              </div>
             
              <div className="px-6 py-4">
                <span className="text-gray-700 text-base font-semibold">
                  Harga: $99.99
                </span>
              </div>
              <div className="px-6 py-4">
                <button className="bg-slate-800 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded">
                  Beli Sekarang
                </button>
              </div>
            </div>
        </>
    )
}
export default CardKategori;