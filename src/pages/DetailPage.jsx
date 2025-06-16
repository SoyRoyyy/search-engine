import { useParams, Link } from 'react-router-dom';
import searchData from '../data/searchData'; // Ambil data dari dummy data kita
import Navbar from '../assets/components/Navbar'; // Kita akan buat Navbar reusable
import NavbarDetail from '../assets/components/NavbarDetail';

function DetailPage() {
  // 1. Ambil ID dari URL (misal: /item/3)
  const { id } = useParams();

  // 2. Cari data yang cocok berdasarkan ID di dalam searchData
  // Kita gunakan `parseInt` karena ID dari URL adalah string
  const item = searchData.find(data => data.id === parseInt(id));

  // 3. Jika data dengan ID tersebut tidak ditemukan, tampilkan pesan
  if (!item) {
    return (
      <>
        <NavbarDetail/>
        <div className="text-center p-10">
          <h1 className="text-2xl font-bold text-red-600">404 - Item Not Found</h1>
          <p className="text-gray-700 mt-2">Maaf, data yang Anda cari tidak ditemukan.</p>
          <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Kembali ke Beranda</Link>
        </div>
      </>
    );
  }

  // 4. Jika data ditemukan, tampilkan layout detail
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarDetail/>

      <div className="max-w-4xl mx-auto p-6">
        {/* Gambar Hasil Search */}
        <img 
          src={item.foto} 
          alt={`Gambar untuk ${item.title}`}
          className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-6"
        />

        {/* Deskripsi Panjang */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
          {item.deskripsiPanjang}
        </p>

        {/* Source URL */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <p className="text-gray-600">
            Source url aslinya : 
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline ml-2 font-medium"
            >
              {item.url}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;