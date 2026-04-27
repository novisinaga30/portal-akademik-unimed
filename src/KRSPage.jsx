import React, { useEffect, useMemo, useState } from "react";

const daftarMataKuliah = [
  {
    kode: "SI501",
    nama: "Pemrograman Web",
    sks: 3,
    dosen: "Dr. Andi Saputra",
    hari: "Senin",
    jam: "08:00 - 10:30",
    ruangan: "R.201",
  },
  {
    kode: "SI502",
    nama: "Basis Data Lanjut",
    sks: 3,
    dosen: "Dra. Siti Aminah",
    hari: "Selasa",
    jam: "10:00 - 12:30",
    ruangan: "R.105",
  },
  {
    kode: "SI503",
    nama: "Analisis Sistem Informasi",
    sks: 3,
    dosen: "Muhammad Rizky, M.Kom",
    hari: "Rabu",
    jam: "13:00 - 15:30",
    ruangan: "R.302",
  },
  {
    kode: "SI504",
    nama: "Manajemen Proyek TI",
    sks: 2,
    dosen: "Nina Lestari, M.Kom",
    hari: "Kamis",
    jam: "09:00 - 10:40",
    ruangan: "R.204",
  },
  {
    kode: "SI505",
    nama: "Keamanan Sistem Informasi",
    sks: 3,
    dosen: "Budi Santoso, M.Cs",
    hari: "Jumat",
    jam: "08:00 - 10:30",
    ruangan: "Lab 2",
  },
];

export default function KRSPage() {
  const [keyword, setKeyword] = useState("");
  const [hari, setHari] = useState("Semua");
  const [dipilih, setDipilih] = useState(() => {
  const data = localStorage.getItem("krsDipilih");
  return data ? JSON.parse(data) : [];
});
  const [pesan, setPesan] = useState("KRS semester ini siap diatur.");

  const batasSks = 24;

  useEffect(() => {
  localStorage.setItem("krsDipilih", JSON.stringify(dipilih));
}, [dipilih]);

  const totalSks = useMemo(() => {
    return daftarMataKuliah
      .filter((mk) => dipilih.includes(mk.kode))
      .reduce((total, mk) => total + mk.sks, 0);
  }, [dipilih]);

  const hasilFilter = daftarMataKuliah.filter((mk) => {
    const cocokKeyword =
      mk.nama.toLowerCase().includes(keyword.toLowerCase()) ||
      mk.kode.toLowerCase().includes(keyword.toLowerCase()) ||
      mk.dosen.toLowerCase().includes(keyword.toLowerCase());

    const cocokHari = hari === "Semua" || mk.hari === hari;
    return cocokKeyword && cocokHari;
  });

  function ambilMataKuliah(mk) {
    if (dipilih.includes(mk.kode)) return;

    if (totalSks + mk.sks > batasSks) {
      setPesan("Total SKS melebihi batas maksimal 24 SKS.");
      return;
    }

    setDipilih([...dipilih, mk.kode]);
    setPesan(`${mk.nama} berhasil ditambahkan ke KRS.`);
  }

  function batalMataKuliah(mk) {
    setDipilih(dipilih.filter((kode) => kode !== mk.kode));
    setPesan(`${mk.nama} dihapus dari KRS.`);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg mb-6">
          <p className="text-sm opacity-90">Portal Akademik Unimed</p>
          <h1 className="text-3xl font-bold mt-1">Kartu Rencana Studi</h1>
          <p className="opacity-90 mt-1">Semester aktif 5 • Tahun akademik 2026/2027</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-white/20 rounded-2xl p-4">
              <p className="text-sm opacity-90">Total SKS Diambil</p>
              <p className="text-3xl font-bold">{totalSks}</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <p className="text-sm opacity-90">Batas Maksimal</p>
              <p className="text-3xl font-bold">{batasSks}</p>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <p className="text-sm opacity-90">Mata Kuliah Dipilih</p>
              <p className="text-3xl font-bold">{dipilih.length}</p>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-2xl p-4 shadow mb-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Cari mata kuliah, kode, atau dosen..."
            className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400 md:col-span-2"
          />

          <select
            value={hari}
            onChange={(e) => setHari(e.target.value)}
            className="border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
          >
            <option>Semua</option>
            <option>Senin</option>
            <option>Selasa</option>
            <option>Rabu</option>
            <option>Kamis</option>
            <option>Jumat</option>
          </select>
        </div>

        {/* Pesan */}
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-2xl px-4 py-3 mb-6">
          {pesan}
        </div>

        {/* Table Desktop */}
        <div className="hidden md:block bg-white rounded-2xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="text-left p-4">Kode</th>
                <th className="text-left p-4">Mata Kuliah</th>
                <th className="text-left p-4">SKS</th>
                <th className="text-left p-4">Dosen</th>
                <th className="text-left p-4">Jadwal</th>
                <th className="text-left p-4">Status</th>
                <th className="text-left p-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {hasilFilter.map((mk) => {
                const aktif = dipilih.includes(mk.kode);
                return (
                  <tr key={mk.kode} className={aktif ? "bg-green-50" : "border-t"}>
                    <td className="p-4 font-medium">{mk.kode}</td>
                    <td className="p-4">{mk.nama}</td>
                    <td className="p-4">{mk.sks}</td>
                    <td className="p-4 text-gray-600">{mk.dosen}</td>
                    <td className="p-4 text-gray-600">
                      {mk.hari}, {mk.jam}<br />
                      <span className="text-xs">{mk.ruangan}</span>
                    </td>
                    <td className="p-4">
                      <span className={aktif ? "bg-green-100 text-green-700 px-3 py-1 rounded-full" : "bg-gray-100 text-gray-600 px-3 py-1 rounded-full"}>
                        {aktif ? "Dipilih" : "Tersedia"}
                      </span>
                    </td>
                    <td className="p-4">
                      {aktif ? (
                        <button onClick={() => batalMataKuliah(mk)} className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600">
                          Batal
                        </button>
                      ) : (
                        <button onClick={() => ambilMataKuliah(mk)} className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600">
                          Ambil
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Card Mobile */}
        <div className="md:hidden space-y-4">
          {hasilFilter.map((mk) => {
            const aktif = dipilih.includes(mk.kode);
            return (
              <div key={mk.kode} className={aktif ? "bg-green-50 border border-green-200 rounded-2xl p-4 shadow" : "bg-white rounded-2xl p-4 shadow"}>
                <div className="flex justify-between gap-3">
                  <div>
                    <p className="font-semibold">{mk.nama}</p>
                    <p className="text-sm text-gray-500">{mk.kode} • {mk.sks} SKS</p>
                  </div>
                  <span className={aktif ? "text-green-700 text-sm" : "text-gray-500 text-sm"}>{aktif ? "Dipilih" : "Tersedia"}</span>
                </div>
                <p className="text-sm text-gray-600 mt-3">{mk.dosen}</p>
                <p className="text-sm text-gray-600">{mk.hari}, {mk.jam} • {mk.ruangan}</p>
                {aktif ? (
                  <button onClick={() => batalMataKuliah(mk)} className="w-full bg-red-500 text-white py-2 rounded-xl mt-4">
                    Batalkan
                  </button>
                ) : (
                  <button onClick={() => ambilMataKuliah(mk)} className="w-full bg-green-500 text-white py-2 rounded-xl mt-4">
                    Ambil Mata Kuliah
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
