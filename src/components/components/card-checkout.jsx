function CardBayar() {
    return (
        <>
        <div className="w-full border-black border-2 rounded-md p-5 m-4">
            <h1 className="text-xl mb-3 font-semibold">Bayar pesanan</h1>
            <span className="flex justify-between">
            <p>Diskon Harga: </p><p>Rp 0</p>
            </span>
            <span className="flex justify-between border-b-2 pb-2">
            <p>Biaya Pengiriman: </p><p>Rp 0</p>
            </span>
            <span className="flex justify-between my-3 ">
            <p>Total Harga (0 item): </p><p>Rp 0</p>
            </span>
  
            <button className=" py-3 bg-slate-100 rounded-md w-full font-semibold text-lg hover:shadow-md transition-all">Checkout</button>

        </div>
        </>
    )
}
export default CardBayar;