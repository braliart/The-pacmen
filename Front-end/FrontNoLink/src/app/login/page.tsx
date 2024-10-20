"use client";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const router = useRouter();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita la acción predeterminada del formulario
    router.push("/form"); // Navega a la página del formulario
  };

  return (
    <div
      className={`flex h-screen w-full items-center justify-center transition-colors duration-100 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-800 to-slate-900"
          : "bg-gradient-to-br from-[#f2f1f6] to-[#d1d1d1]"
      }`}
    >
      {/* Toggle theme icon */}
      <div className="absolute top-4 right-4 text-3xl cursor-pointer">
        {isDarkMode ? (
          <FaSun className="text-yellow-400" onClick={toggleTheme} />
        ) : (
          <FaMoon className="text-gray-800" onClick={toggleTheme} />
        )}
      </div>

      <div
        className={`w-full max-w-md p-8 rounded-lg shadow-2xl transition-colors duration-500 ${
          isDarkMode ? "bg-gray-900" : "bg-[#f2f1f6]"
        }`}
      >
        <h2
          className={`text-3xl font-bold text-center mb-6 ${
            isDarkMode ? "text-white" : "text-[#127df7]"
          }`}
        >
          Health +
        </h2>
        <p
          className={`text-2xl text-center mb-8 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Centralizando tu historial médico
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className={`block font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
              placeholder="Enter your email"
              
            />
          </div>

          <div>
            <label
              className={`block font-medium mb-2 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300 ${
                isDarkMode
                  ? "bg-gray-800 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
              placeholder="Enter your password"
              
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#127df7] text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Log In
          </button>

          <p
            className={`text-center mt-4 ${
              isDarkMode ? "text-gray-300" : "text-gray-500"
            }`}
          >
            Don't have an account?{" "}
            <a href="/signup" className="text-[#127df7] hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
