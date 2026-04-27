import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!nim || !password) {
      setError("NIM dan password wajib diisi.");
      return;
    }

    // Login dummy untuk demo.
    // Nanti bisa diganti dengan API/database asli.
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("namaMahasiswa", "Novi Novani Sinaga");
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white p-8 md:p-10 flex flex-col justify-between">
          <div>
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">
              U
            </div>
            <h1 className="text-3xl font-bold leading-tight">Portal Akademik Unimed</h1>
            <p className="mt-4 text-white/90 leading-relaxed">
              Akses informasi akademik, KRS, KHS, jadwal, profil, dan pengumuman kampus dalam satu tempat.
            </p>
          </div>

          <div className="mt-10 bg-white/15 rounded-2xl p-5">
            <p className="font-semibold">Demo Login</p>
            <p className="text-sm text-white/80 mt-1">Isi NIM dan password apa saja untuk masuk.</p>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-8">
            <p className="text-sm text-green-600 font-semibold">Selamat datang kembali</p>
            <h2 className="text-3xl font-bold text-gray-800 mt-2">Login Mahasiswa</h2>
            <p className="text-gray-500 mt-2">Masuk menggunakan NIM dan password akun akademik kamu.</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-2xl px-4 py-3 mb-5 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm text-gray-600">NIM</label>
              <input
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                placeholder="Masukkan NIM"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-2 outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className="accent-green-500" />
                Ingat saya
              </label>
              <button type="button" className="text-green-600 hover:underline">
                Lupa password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition"
            >
              Masuk ke Portal
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            © 2026 Portal Akademik Unimed
          </p>
        </div>
      </div>
    </div>
  );
}
