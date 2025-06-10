import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import searchData from "../data/searchData";
import { FiSearch } from "react-icons/fi";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResults() {
  const navigate = useNavigate();
  const queryParam = useQuery().get("q") || "";
  const [query, setQuery] = useState(queryParam);

  const filteredResults = searchData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-6 py-4 shadow-md bg-gray-50">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 leading-[1.3]">
          Yalali Search Engine</h1>
        <form onSubmit={handleSearch} className="flex w-full max-w-xl ml-8">
          <input
            type="text"
            placeholder="Cari sesuatu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 flex items-center justify-center"
          >
            <FiSearch size={20} />
          </button>
        </form>
      </div>

      {/* Hasil pencarian */}
      <div className="p-6">
        <h2 className="text-md text-gray-700 mb-4">
          Menampilkan hasil untuk: <span className="font-medium text-blue-600">{queryParam}</span>
        </h2>

        {filteredResults.length > 0 ? (
          <ul className="space-y-6">
            {filteredResults.map((item) => (
              <li key={item.id}>
                <a href="#" className="text-blue-600 text-lg hover:underline">
                  {item.title}
                </a>
                <p className="text-sm text-gray-600">{item.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500">Tidak ditemukan hasil untuk "{queryParam}".</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
