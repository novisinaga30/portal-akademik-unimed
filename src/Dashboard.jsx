import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-green-600 text-white rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold">Selamat datang, Novi 👋</h1>
        <p className="mt-2">Portal Akademik Unimed</p>
        <p className="text-4xl font-bold mt-4">IPK 3.75</p>

        {/* 🔥 Tambahan tombol */}
        <button
          onClick={() => navigate("/krs")}
          className="mt-4 bg-white text-green-600 px-4 py-2 rounded-xl font-semibold shadow"
        >
          Buka KRS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white rounded-2xl p-4 shadow">
          <p className="text-gray-500">Total SKS</p>
          <h2 className="text-2xl font-bold">110</h2>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <p className="text-gray-500">Semester</p>
          <h2 className="text-2xl font-bold">5</h2>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow">
          <p className="text-gray-500">Mata Kuliah</p>
          <h2 className="text-2xl font-bold">6</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;