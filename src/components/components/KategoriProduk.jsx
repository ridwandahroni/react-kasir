import React from 'react';

const kategoriProdukData = [
  { id: 1, nama: 'Elektronik', gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7r98w-llcxtcn3k7jl85_tn' },
  { id: 2, nama: 'Fashion', gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7qul9-lilwrahe2q1j5e' },
  { id: 3, nama: 'Otomotif', gambar: 'https://down-id.img.susercontent.com/file/07b9f0e1b04653be65e032c9f941cdf9' },
  { id: 4, nama: 'Lainnya', gambar: 'https://down-id.img.susercontent.com/file/id-11134207-7qul2-lf1f133tem9p1c' },
  // Tambahkan lebih banyak kategori di sini
];

const KategoriProduk = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Kategori Produk</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {kategoriProdukData.map((kategori) => (
          <div key={kategori.id} className="bg-white p-4 rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <img src={kategori.gambar} alt={kategori.nama} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mt-2">{kategori.nama}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KategoriProduk;
