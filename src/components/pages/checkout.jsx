import React, { useState } from 'react';
import Header from '../layouts/Header';

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
    <Header/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nama" clas  sName="block text-gray-700 font-bold mb-2">
            Nama:
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Tambahkan input untuk alamat, email, nomor telepon, dan metode pembayaran */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Proses Pesanan
        </button>
      </form>
    </div>
    </>
  );
};

export default Checkout;
