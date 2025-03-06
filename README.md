# FilmVista

FilmVista adalah aplikasi web berbasis **Next.js 15** yang menampilkan informasi film menggunakan **TMDB API**. Aplikasi ini dilengkapi dengan berbagai fitur, termasuk sistem autentikasi menggunakan **NextAuth**.

## 🚀 Fitur Utama

- 🔍 Pencarian film dan detail lengkap
- 🏆 Daftar film populer, terbaru, dan trending
- ⭐ Favorit dan watchlist pengguna
- 🔐 Autentikasi dengan **NextAuth**
- 🎭 Kategori dan genre untuk eksplorasi lebih lanjut

## 🛠️ Teknologi yang Digunakan

- **Next.js 15** - Framework React modern yang mendukung rendering sisi server dan klien
- **TMDB API** - Sumber data utama untuk informasi film dan serial televisi
- **NextAuth.js** - Sistem autentikasi yang fleksibel dengan berbagai penyedia login
- **Tailwind CSS** - Framework CSS yang memungkinkan pengembangan UI yang cepat dan responsif
- **Vercel** - Platform hosting yang dioptimalkan untuk aplikasi Next.js

## 📦 Instalasi & Menjalankan Proyek

### 1️⃣ Clone repository

```sh
git clone https://github.com/Viergi/web-movie.git
cd FilmVista
```

### 2️⃣ Instal dependensi

```sh
npm install
```

### 3️⃣ Konfigurasi lingkungan

Buat file `.env.local` dan tambahkan:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.themoviedb.org/3
NEXT_PUBLIC_API_IMAGE_URL=https://image.tmdb.org/t/p/original
NEXT_PUBLIC_API_IMAGE_URL_CARD=https://image.tmdb.org/t/p/w500
NEXT_PUBLIC_API_KEY=your_tmdb_api_key
AUTH_URL=your.domain.com//development use http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
DATABASE_URL=your_link_database
DIRECT_URL=your_direct_link_database
```

### 4️⃣ Jalankan proyek

```sh
npm run dev
```

Akses **http://localhost:3000** di browser Anda.

## 📜 Lisensi

Hak Cipta © 2025 Viergi. Dirilis di bawah Lisensi MIT.

---

🎬 Dikembangkan oleh Viergi
