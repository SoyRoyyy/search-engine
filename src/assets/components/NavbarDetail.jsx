import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function NavbarDetail() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 shadow-md bg-gray-50/80 backdrop-blur-sm">
      <Link to="/">
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-400 leading-[1.3]">
          Yalali Search Engine
        </h1>
      </Link>
    </div>
  );
}

export default NavbarDetail;