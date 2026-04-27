# Portal Akademik Unimed

Portal Akademik Unimed adalah aplikasi web berbasis React yang dibuat untuk membantu mahasiswa mengakses informasi akademik seperti dashboard, KRS, KHS, profil, dan pengumuman kampus dalam satu platform.

## Live Demo

https://portal-akademik-unimed-ky2s.vercel.app

## Fitur Utama

- Login mahasiswa
- Dashboard akademik
- KRS interaktif
- Data KRS tersimpan meskipun halaman di-refresh
- KHS / nilai akademik
- Grafik perkembangan IP
- Profil mahasiswa
- Pengumuman kampus
- Sidebar navigation
- Navbar atas
- Logout system

## Teknologi yang Digunakan

- React
- Vite
- Tailwind CSS
- React Router DOM
- LocalStorage
- Vercel

## Halaman Aplikasi

### Login
Halaman login digunakan sebagai pintu masuk mahasiswa sebelum mengakses portal.

### Dashboard
Menampilkan ringkasan informasi akademik seperti IPK, total SKS, jadwal, dan pengumuman.

### KRS
Mahasiswa dapat memilih dan membatalkan mata kuliah. Total SKS akan berubah otomatis dan data tetap tersimpan menggunakan LocalStorage.

### KHS
Menampilkan nilai akademik mahasiswa, IP semester, IPK, dan grafik perkembangan nilai.

### Profil
Menampilkan data mahasiswa serta fitur edit profil sederhana.

### Pengumuman
Menampilkan daftar pengumuman akademik berdasarkan kategori.

## Cara Menjalankan Project

1. Clone repository:

```bash
git clone https://github.com/USERNAME/portal-akademik-unimed.git
