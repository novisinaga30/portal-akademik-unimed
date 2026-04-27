import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import KRSPage from "./KRSPage";
import KHSPage from "./KHSPage";
import ProfilePage from "./ProfilePage";
import PengumumanPage from "./PengumumanPage";

function PrivateRoute({ children }) {
  const isLogin = localStorage.getItem("isLogin");

  if (isLogin !== "true") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-md p-5 hidden md:block">
        <h1 className="text-xl font-bold text-green-600 mb-8">
          Portal Akademik
        </h1>

        <nav className="space-y-2">
          <MenuLink to="/" label="Dashboard" />
          <MenuLink to="/krs" label="KRS" />
          <MenuLink to="/khs" label="KHS / Nilai" />
          <MenuLink to="/profil" label="Profil" />
          <MenuLink to="/pengumuman" label="Pengumuman" />

          <button
            onClick={() => {
              localStorage.removeItem("isLogin");
              window.location.href = "/login";
            }}
            className="block w-full text-left px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600"
          >
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1">{children}</main>
    </div>
  );
}

function MenuLink({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block px-4 py-3 rounded-xl bg-green-500 text-white font-medium"
          : "block px-4 py-3 rounded-xl text-gray-600 hover:bg-green-50"
      }
    >
      {label}
    </NavLink>
  );
}

function ProtectedPage({ children }) {
  return (
    <PrivateRoute>
      <Layout>{children}</Layout>
    </PrivateRoute>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/"
          element={
            <ProtectedPage>
              <Dashboard />
            </ProtectedPage>
          }
        />

        <Route
          path="/krs"
          element={
            <ProtectedPage>
              <KRSPage />
            </ProtectedPage>
          }
        />

        <Route
          path="/khs"
          element={
            <ProtectedPage>
              <KHSPage />
            </ProtectedPage>
          }
        />

        <Route
          path="/profil"
          element={
            <ProtectedPage>
              <ProfilePage />
            </ProtectedPage>
          }
        />

        <Route
          path="/pengumuman"
          element={
            <ProtectedPage>
              <PengumumanPage />
            </ProtectedPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;