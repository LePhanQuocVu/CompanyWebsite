import React, { useState } from 'react';
import { FaGoogle, FaUser } from 'react-icons/fa';
import { RegisterModal } from '../register/Register';

export const LoginModal = ({ isOpen, onClose }) => {
    
  const [showRegister, setShowRegister] = useState(false);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          &times;
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white w-12 h-12 flex items-center justify-center rounded-xl font-bold text-lg mb-4">
            SW
          </div>
          <h2 className="text-xl font-semibold mb-2">Đăng nhập</h2>
          <p className="text-sm text-pink-500 mb-4">
            Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người dùng sẽ bị khóa.
          </p>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center gap-2 justify-center border rounded-full px-4 py-2 hover:bg-gray-100"
          onClick={() => setShowRegister(true)}
          >
            <FaUser />
            Sử dụng email / số điện thoại
          </button>
          <button className="w-full flex items-center gap-2 justify-center border rounded-full px-4 py-2 hover:bg-gray-100">
            <FaGoogle />
            Đăng nhập với Google
          </button>
        </div>

        <div className="mt-5 text-sm text-center">
          Bạn chưa có tài khoản?{' '}
          <a href="/#" className="text-blue-500 font-semibold hover:underline"
          onClick={() => setShowRegister(true)}>
            Đăng ký
          </a>
          <br />
          <a href="/#" className="text-red-500 mt-2 block hover:underline">
            Quên mật khẩu?
          </a>
        </div>

        <p className="text-xs text-gray-400 text-center mt-4">
          Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với{' '}
          <a href="/#" className="underline">
            điều khoản sử dụng
          </a>{' '}
          của chúng tôi.
        </p>
      </div>
        <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} />
    </div>
  );
};
