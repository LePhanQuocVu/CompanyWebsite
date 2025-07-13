import React, { useState } from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

export const RegisterModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: '' });
  };

  const handleSubmit = () => {
    let newError = {};
    if (!form.email.trim()) newError.email = 'Vui lòng nhập email';
    if (!form.password.trim()) newError.password = 'Vui lòng nhập mật khẩu';
    setError(newError);
    if (Object.keys(newError).length === 0) {
      // Call backend
      console.log('Submitting...', form);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>

        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-xl font-bold text-lg mx-auto mb-3">
            SW
          </div>
          <h2 className="text-xl font-semibold mb-1">Đăng ký tài khoản SW</h2>
          <p className="text-sm text-pink-500 mb-4">
            Mỗi người nên sử dụng riêng một tài khoản, tài khoản nhiều người sử dụng chung sẽ bị khóa.
          </p>
        </div>


        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium">Email của bạn</label>
          <input
            name="email"
            type="email"
            placeholder="Địa chỉ email"
            value={form.email}
            onChange={handleChange}
            className={`w-full mt-1 px-4 py-2 border ${
              error.email ? 'border-red-500' : 'border-gray-300'
            } rounded-full focus:outline-none`}
          />
          {error.email && (
            <div className="text-red-500 text-sm mt-1 flex items-center gap-1">
              <FaExclamationCircle /> {error.emaill}
            </div>
          )}
        </div>

        {/* Mật khẩu */}
        <div className="mb-4">
          <input
            name="password"
            type="password"
            placeholder="Mật khẩu"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
          />
        </div>

        {/* Nút đăng ký */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full"
        >
          Đăng ký
        </button>

        <div className="text-sm text-center mt-4">
          Bạn đã có tài khoản?{' '}
          <a href="/#" className="text-red-500 hover:underline">
            Đăng nhập
          </a>
          <br />
          <a href="/#" className="text-gray-500 text-xs hover:underline mt-2 inline-block">
            Quên mật khẩu?
          </a>
        </div>
      </div>
    </div>
  );
};
