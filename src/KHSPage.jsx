import React, { useMemo, useState } from "react";

const dataNilai = {
  1: [
    { kode: "MK101", nama: "Pengantar Teknologi Informasi", sks: 3, huruf: "A", angka: 4.0 },
    { kode: "MK102", nama: "Algoritma dan Pemrograman", sks: 3, huruf: "A-", angka: 3.7 },
    { kode: "MK103", nama: "Matematika Diskrit", sks: 3, huruf: "B+", angka: 3.3 },
  ],
  2: [
    { kode: "MK201", nama: "Struktur Data", sks: 3, huruf: "A", angka: 4.0 },
    { kode: "MK202", nama: "Basis Data", sks: 3, huruf: "A", angka: 4.0 },
    { kode: "MK203", nama: "Sistem Operasi", sks: 3, huruf: "B+", angka: 3.3 },
  ],
  3: [
    { kode: "MK301", nama: "Pemrograman Web", sks: 3, huruf: "A", angka: 4.0 },
    { kode: "MK302", nama: "Jaringan Komputer", sks: 3, huruf: "A-", angka: 3.7 },
    { kode: "MK303", nama: "Analisis Sistem", sks: 3, huruf: "B+", angka: 3.3 },
  ],
  4: [
    { kode: "MK401", nama: "Rekayasa Perangkat Lunak", sks: 3, huruf: "A", angka: 4.0 },
    { kode: "MK402", nama: "Manajemen Proyek TI", sks: 2, huruf: "A-", angka: 3.7 },
    { kode: "MK403", nama: "Keamanan Sistem Informasi", sks: 3, huruf: "B", angka: 3.0 },
  ],
};

function hitungIP(nilai) {
  const totalBobot = nilai.reduce((total, item) => total + item.sks * item.angka, 0);
  const totalSks = nilai.reduce((total, item) => total + item.sks, 0);
  return totalSks ? (totalBobot / totalSks).toFixed(2) : "0.00";
}

export default function KHSPage() {
  const [semester, setSemester] = useState("4");

  const semuaNilai = Object.values(dataNilai).flat();
  const nilaiSemester = dataNilai[semester] || [];

  const ipSemester = useMemo(() => hitungIP(nilaiSemester), [nilaiSemester]);
  const ipkTotal = useMemo(() => hitungIP(semuaNilai), [semuaNilai]);
  const totalSks = semuaNilai.reduce((total, item) => total + item.sks, 0);
  const jumlahMatkul = semuaNilai.length;

  const trenIP = Object.entries(dataNilai).map(([smt, nilai]) => ({
    semester: smt,
    ip: Number(hitungIP(nilai)),
  }));

  const ipTerbaik = Math.max(...trenIP.map((item) => item.ip));

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg mb-6">
          <p className="text-sm opacity-90">Portal Akademik Unimed</p>
          <h1 className="text-3xl font-bold mt-1">KHS / Nilai Akademik</h1>
          <p className="opacity-90 mt-1">Pantau nilai, IP semester, dan perkembangan IPK kamu.</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/20 rounded-2xl p-4">
              <p className="text-sm opacity-90">IPK Total</p>
              <p className="text-3xl font-bold">{ipkTotal}</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <p className="text-sm opacity-90">IP Semester</p>
              <p className="text-3xl font-bold">{ipSemester}</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <p className="text-sm opacity-90">SKS Lulus</p>
              <p className="text-3xl font-bold">{totalSks}</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <p className="text-sm opacity-90">Mata Kuliah</p>
              <p className="text-3xl font-bold">{jumlahMatkul}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-2xl p-5 shadow lg:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-xl font-semibold">Perkembangan IP</h2>
                <p className="text-sm text-gray-500">Grafik sederhana IP per semester</p>
              </div>
              <select
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              >
                {Object.keys(dataNilai).map((smt) => (
                  <option key={smt} value={smt}>Semester {smt}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end gap-4 h-56 border-b border-gray-200 pt-6">
              {trenIP.map((item) => (
                <div key={item.semester} className="flex-1 flex flex-col items-center gap-2">
                  <div className="text-sm font-semibold text-gray-700">{item.ip}</div>
                  <div
                    className={item.ip === ipTerbaik ? "w-full max-w-16 bg-green-500 rounded-t-xl" : "w-full max-w-16 bg-green-200 rounded-t-xl"}
                    style={{ height: `${item.ip * 45}px` }}
                  />
                  <div className="text-xs text-gray-500">Smt {item.semester}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow">
            <h2 className="text-xl font-semibold">Insight Akademik</h2>
            <p className="text-sm text-gray-500 mt-1">Ringkasan performa kamu</p>
            <div className="mt-5 space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
                <p className="font-semibold text-green-700">Performa stabil</p>
                <p className="text-sm text-gray-600 mt-1">IPK kamu masih berada di atas 3.50. Pertahankan konsistensi belajar.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="font-semibold text-gray-700">Semester terbaik</p>
                <p className="text-sm text-gray-600 mt-1">IP tertinggi kamu adalah {ipTerbaik.toFixed(2)}.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <p className="font-semibold text-gray-700">Rekomendasi</p>
                <p className="text-sm text-gray-600 mt-1">Fokus tingkatkan mata kuliah dengan nilai B agar IPK naik lebih cepat.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
            <div>
              <h2 className="text-xl font-semibold">Daftar Nilai Semester {semester}</h2>
              <p className="text-sm text-gray-500">Detail nilai mata kuliah yang sudah ditempuh</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">Cetak KHS</button>
              <button className="bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200">Unduh PDF</button>
            </div>
          </div>

          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="text-left p-4">Kode</th>
                  <th className="text-left p-4">Mata Kuliah</th>
                  <th className="text-left p-4">SKS</th>
                  <th className="text-left p-4">Nilai</th>
                  <th className="text-left p-4">Bobot</th>
                  <th className="text-left p-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {nilaiSemester.map((item) => (
                  <tr key={item.kode} className="border-t">
                    <td className="p-4 font-medium">{item.kode}</td>
                    <td className="p-4">{item.nama}</td>
                    <td className="p-4">{item.sks}</td>
                    <td className="p-4 font-semibold">{item.huruf}</td>
                    <td className="p-4">{item.angka}</td>
                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Lulus</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {nilaiSemester.map((item) => (
              <div key={item.kode} className="bg-gray-50 rounded-2xl p-4">
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="font-semibold">{item.nama}</p>
                    <p className="text-sm text-gray-500">{item.kode} • {item.sks} SKS</p>
                  </div>
                  <p className="font-bold text-green-600">{item.huruf}</p>
                </div>
                <p className="text-sm text-gray-600 mt-2">Bobot: {item.angka}</p>
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mt-3">Lulus</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
