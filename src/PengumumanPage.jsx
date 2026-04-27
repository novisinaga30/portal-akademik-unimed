import React, { useState } from "react";

const dataPengumuman = [
  {
    id: 1,
    judul: "Pengisian KRS Semester Ganjil Dibuka",
    kategori: "Akademik",
    tanggal: "28 April 2026",
    ringkasan: "Mahasiswa dapat melakukan pengisian KRS mulai minggu ini melalui portal akademik.",
    isi: "Pengisian KRS Semester Ganjil Tahun Akademik 2026/2027 telah dibuka. Mahasiswa diwajibkan memilih mata kuliah sesuai jadwal dan berkonsultasi dengan dosen pembimbing akademik sebelum melakukan finalisasi KRS.",
  },
  {
    id: 2,
    judul: "Jadwal Ujian Tengah Semester",
    kategori: "Ujian",
    tanggal: "25 April 2026",
    ringkasan: "Jadwal UTS akan dimulai pada minggu kedua bulan Mei 2026.",
    isi: "Ujian Tengah Semester akan dilaksanakan sesuai jadwal yang telah ditentukan oleh masing-masing program studi. Mahasiswa diharapkan mengecek jadwal ujian secara berkala melalui portal akademik.",
  },
  {
    id: 3,
    judul: "Validasi Data Mahasiswa Aktif",
    kategori: "Administrasi",
    tanggal: "22 April 2026",
    ringkasan: "Mahasiswa diminta memastikan data pribadi dan akademik sudah benar.",
    isi: "Seluruh mahasiswa aktif diminta untuk memeriksa dan memperbarui data pribadi pada halaman profil. Data yang tidak sesuai dapat memengaruhi proses administrasi akademik.",
  },
  {
    id: 4,
    judul: "Pembayaran UKT Semester Baru",
    kategori: "Keuangan",
    tanggal: "20 April 2026",
    ringkasan: "Pembayaran UKT dapat dilakukan sesuai jadwal yang telah ditentukan.",
    isi: "Pembayaran UKT semester baru dapat dilakukan melalui bank mitra kampus. Mahasiswa wajib menyelesaikan pembayaran sebelum melakukan pengisian KRS.",
  },
];

export default function PengumumanPage() {
  const [kategori, setKategori] = useState("Semua");
  const [terpilih, setTerpilih] = useState(dataPengumuman[0]);

  const hasilFilter = kategori === "Semua"
    ? dataPengumuman
    : dataPengumuman.filter((item) => item.kategori === kategori);

  const kategoriList = ["Semua", "Akademik", "Ujian", "Administrasi", "Keuangan"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg mb-6">
          <p className="text-sm opacity-90">Portal Akademik Unimed</p>
          <h1 className="text-3xl font-bold mt-1">Pengumuman</h1>
          <p className="opacity-90 mt-1">Informasi terbaru seputar akademik, ujian, administrasi, dan keuangan.</p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow mb-6 overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {kategoriList.map((item) => (
              <button
                key={item}
                onClick={() => setKategori(item)}
                className={kategori === item
                  ? "bg-green-500 text-white px-4 py-2 rounded-xl"
                  : "bg-gray-100 text-gray-600 px-4 py-2 rounded-xl hover:bg-green-50"}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            {hasilFilter.map((item) => (
              <button
                key={item.id}
                onClick={() => setTerpilih(item)}
                className={terpilih.id === item.id
                  ? "w-full text-left bg-green-50 border border-green-200 rounded-2xl p-4 shadow"
                  : "w-full text-left bg-white rounded-2xl p-4 shadow hover:bg-gray-50"}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    {item.kategori}
                  </span>
                  <span className="text-xs text-gray-500">{item.tanggal}</span>
                </div>
                <h2 className="font-semibold text-gray-800">{item.judul}</h2>
                <p className="text-sm text-gray-500 mt-2">{item.ringkasan}</p>
              </button>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b pb-5 mb-5">
              <div>
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  {terpilih.kategori}
                </span>
                <h2 className="text-2xl font-bold mt-3 text-gray-800">{terpilih.judul}</h2>
                <p className="text-sm text-gray-500 mt-1">Dipublikasikan pada {terpilih.tanggal}</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">
                Tandai Dibaca
              </button>
            </div>

            <p className="text-gray-700 leading-relaxed">{terpilih.isi}</p>

            <div className="bg-gray-50 rounded-2xl p-4 mt-6">
              <p className="font-semibold text-gray-800">Catatan</p>
              <p className="text-sm text-gray-600 mt-1">
                Selalu cek portal akademik secara berkala agar tidak melewatkan informasi penting dari kampus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
