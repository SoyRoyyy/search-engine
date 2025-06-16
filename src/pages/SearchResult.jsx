import { useLocation, Link } from "react-router-dom"; // Ganti useNavigate dengan Link
import searchData from "../data/searchData";
import Navbar from "../assets/components/Navbar"; // Impor Navbar

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const queryParam = useQuery().get("q") || "";
  const query = queryParam; // Kita hanya perlu query dari URL

  const filteredResults = query
    ? searchData.filter((item) => {
        const queryLower = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(queryLower) ||
          item.deskripsiSingkat.toLowerCase().includes(queryLower) ||
          item.deskripsiPanjang.toLowerCase().includes(queryLower)
        );
      })
    : [];

  return (
    <div className="min-h-screen bg-white">
      <Navbar /> {/* Gunakan komponen Navbar di sini */}

      <div className="p-6">
        {query ? ( // Hanya tampilkan konten jika ada query
          <>
            <h2 className="text-md text-gray-700 mb-4">
              Menampilkan hasil untuk: <span className="font-medium text-blue-600">{query}</span>
            </h2>

            {filteredResults.length > 0 ? (
              <ul className="space-y-4">
                {filteredResults.map((item) => (
                  <li key={item.id} className="border-b pb-4 last:border-b-0">
                    {/* Setiap item sekarang adalah Link ke halaman detail */}
                    <Link to={`/item/${item.id}`} className="block group">
                      <h3 className="text-xl text-blue-700 group-hover:underline font-medium">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.deskripsiSingkat}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-red-500">Tidak ditemukan hasil untuk "{query}".</p>
            )}
          </>
        ) : (
          <p className="text-gray-700">Silakan masukkan kata kunci pada kolom pencarian di atas.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;