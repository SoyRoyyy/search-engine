import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function Navbar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 shadow-md bg-gray-50/80 backdrop-blur-sm">
      <Link to="/">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 leading-[1.3]">
          Yalali Search Engine
        </h1>
      </Link>
      <form onSubmit={handleSearch} className="flex w-full max-w-xl ml-8">
        <input
          type="text"
          placeholder="Cari lagi..."
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
  );
}

export default Navbar;