import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { LoginModal } from '../login/Login';
import { RegisterModal } from '../register/Register';

export const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <header className="w-full bg-white shadow px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl w-10 h-10 flex items-center justify-center font-bold text-lg">
          SW
        </div>
        <h1 className="text-lg font-semibold">My website</h1>
      </div>
      <div className="flex-1 max-w-xl mx-6">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Tìm kiếm bài viết,blog..."
            className="flex-1 bg-transparent outline-none text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-sm font-semibold text-black"
        onClick={() => setShowRegister(true)}
        >Đăng ký</button>
        <button className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
        onClick={()=>  setShowLogin(true)}>
          Đăng nhập
        </button>
        <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)}/>
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)}/>
      </div>
    </header>
  );
};

