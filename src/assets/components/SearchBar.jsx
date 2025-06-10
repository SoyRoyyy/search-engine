// src/components/SearchBar.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-full">
      {/* Form pencarian utama */}
      <form onSubmit={handleSearch} className="flex w-full max-w-xl">
        <input
          type="text"
          placeholder="Apa yang Anda cari..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 flex items-center justify-center"
        >
          <FiSearch size={20} />
        </button>
      </form>

      {/* Tombol tambahan */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          type="button"
          onClick={handleSearch}
          className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
        >
          Apa yang Anda cari?
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
        >
          I'm Feeling Lucky
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
