import React, { useState } from "react";

export default function ProfilePage() {
  const [modeEdit, setModeEdit] = useState(false);
  const [profil, setProfil] = useState({
    nama: "Novi Novani Sinaga",
    nim: "223510001",
    prodi: "Sistem Informasi",
    fakultas: "Fakultas Teknik",
    semester: "5",
    email: "novi@student.unimed.ac.id",
    telepon: "0812-3456-7890",
    alamat: "Medan, Sumatera Utara",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setProfil({ ...profil, [name]: value });
  }

  function simpanProfil() {
    setModeEdit(false);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg mb-6">
          <p className="text-sm opacity-90">Portal Akademik Unimed</p>
          <h1 className="text-3xl font-bold mt-1">Profil Mahasiswa</h1>
          <p className="opacity-90 mt-1">Kelola informasi akademik dan data pribadi mahasiswa.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Kartu Profil */}
          <div className="bg-white rounded-2xl p-6 shadow lg:col-span-1">
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-4xl font-bold mb-4">
                NS
              </div>
              <h2 className="text-xl font-bold">{profil.nama}</h2>
              <p className="text-gray-500 text-sm mt-1">{profil.nim}</p>
              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm mt-4">
                Mahasiswa Aktif
              </span>
            </div>

            <div className="border-t mt-6 pt-6 space-y-4 text-sm">
              <InfoItem label="Program Studi" value={profil.prodi} />
              <InfoItem label="Fakultas" value={profil.fakultas} />
              <InfoItem label="Semester" value={profil.semester} />
            </div>
          </div>

          {/* Detail Profil */}
          <div className="bg-white rounded-2xl p-6 shadow lg:col-span-2">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div>
                <h2 className="text-xl font-semibold">Data Mahasiswa</h2>
                <p className="text-sm text-gray-500">Pastikan data kamu sudah benar dan terbaru.</p>
              </div>

              {modeEdit ? (
                <div className="flex gap-2">
                  <button
                    onClick={() => setModeEdit(false)}
                    className="bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200"
                  >
                    Batal
                  </button>
                  <button
                    onClick={simpanProfil}
                    className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
                  >
                    Simpan
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setModeEdit(true)}
                  className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
                >
                  Edit Profil
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Nama Lengkap" name="nama" value={profil.nama} edit={modeEdit} onChange={handleChange} />
              <Field label="NIM" name="nim" value={profil.nim} edit={modeEdit} onChange={handleChange} disabled />
              <Field label="Program Studi" name="prodi" value={profil.prodi} edit={modeEdit} onChange={handleChange} />
              <Field label="Fakultas" name="fakultas" value={profil.fakultas} edit={modeEdit} onChange={handleChange} />
              <Field label="Semester" name="semester" value={profil.semester} edit={modeEdit} onChange={handleChange} />
              <Field label="Email" name="email" value={profil.email} edit={modeEdit} onChange={handleChange} />
              <Field label="Nomor Telepon" name="telepon" value={profil.telepon} edit={modeEdit} onChange={handleChange} />
              <Field label="Alamat" name="alamat" value={profil.alamat} edit={modeEdit} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow mt-6">
          <h2 className="text-xl font-semibold mb-4">Ringkasan Akademik</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SummaryCard label="IPK" value="3.75" />
            <SummaryCard label="Total SKS" value="110" />
            <SummaryCard label="Semester Aktif" value="5" />
            <SummaryCard label="Status" value="Aktif" />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
}

function Field({ label, name, value, edit, onChange, disabled }) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      {edit && !disabled ? (
        <input
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-green-400"
        />
      ) : (
        <div className="bg-gray-50 rounded-xl px-4 py-3 mt-1 text-gray-800">
          {value}
        </div>
      )}
    </div>
  );
}

function SummaryCard({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-800 mt-1">{value}</p>
    </div>
  );
}
