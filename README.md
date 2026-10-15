# 👶 NutriMPASI - Brand Website & Digital Media MPASI Sehat Bayi

Selamat datang di repositori resmi **NutriMPASI**! Website ini dibangun khusus untuk orang tua muda (terutama ibu usia 23–35 tahun dengan bayi 6–24 bulan) yang membutuhkan produk serta edukasi MPASI sehat, praktis, bergizi, dan aman.

Website ini dibuat menggunakan teknologi modern berkecepatan tinggi: **Astro v4 (SSG)**, **Tailwind CSS**, **TypeScript**, dan **Notion API** sebagai Headless CMS.

---

## 🎨 Identitas Brand & Desain
- **Gaya Desain:** Modern • Minimalist • Playful • Soft • Clean
- **Warna Brand:**
  - `Primary`: `#4ABFCA` (Fresh Turquoise)
  - `Secondary`: `#FFF3D6` (Soft Cream)
  - `Accent`: `#FFB86B` (Warm Peach)
  - `Accent 2`: `#F58F8F` (Soft Coral)
  - `Text`: `#31545A` (Deep Teal)
  - `Background`: `#F8FCFA` (Clean Mint White)
- **CTA Utama:** *“Pilih MPASI Sehat untuk Si Kecil”*

---

## 🚀 Fitur Unggulan Website
1. **Performa Super Cepat (Astro SSG):** Skor Google Lighthouse mendekati 100 dengan Zero-JS default.
2. **Notion Headless CMS:** Update artikel, resep, dan foto langsung dari aplikasi Notion di HP atau Laptop tanpa perlu coding ulang!
3. **Pencarian & Filter Interaktif:** Filter topik [TOPIK_BLOG] dan kolom pencarian instan tanpa reload halaman.
4. **100% SEO Ready:** Dilengkapi Open Graph, Twitter Cards, Canonical URL, Sitemap XML, Robots.txt, dan Schema.org JSON-LD (Article, Breadcrumbs, Organization).
5. **Aman untuk Pemula (Zero-Crash Fallback):** Website langsung bisa dijalankan secara lokal dengan data demo berkualitas bahkan sebelum Anda menyambungkan Notion API.

---

## 📁 Struktur Direktori Project
```text
/
├── public/
│   ├── favicon.svg             # Favicon mangkuk bayi & tunas sehat
│   └── robots.txt              # Konfigurasi perayapan mesin pencari (SEO)
├── src/
│   ├── components/
│   │   ├── BlogCard.astro      # Kartu postingan blog responsif
│   │   ├── Breadcrumbs.astro   # Navigasi rekam jejak + Schema JSON-LD
│   │   ├── Footer.astro        # Footer lengkap dengan disclaimer gizi & topik
│   │   ├── Hero.astro          # Banner utama produk & CTA
│   │   ├── Navbar.astro        # Navigasi atas + menu mobile responsif
│   │   ├── NotionRenderer.astro# Parser blok Notion (paragraf, judul, kutipan, list)
│   │   └── SEO.astro           # Komponen metadata SEO komprehensif
│   ├── layouts/
│   │   └── Layout.astro        # Kerangka layout utama halaman
│   ├── lib/
│   │   └── notion.ts           # Koneksi Notion API, helper slugify, & fallback data
│   ├── pages/
│   │   ├── index.astro         # Homepage produk & 3 artikel terbaru
│   │   ├── about.astro         # Halaman profil, visi & misi
│   │   ├── blog/
│   │   │   ├── index.astro     # Katalog blog lengkap dengan filter topik
│   │   │   └── [slug].astro    # Halaman detail artikel blog dinamis
│   └── styles/
│       └── global.css          # Tipografi Google Fonts & styling Tailwind
├── .env.example                # Contoh format variabel rahasia
├── astro.config.mjs            # Konfigurasi Astro + Sitemap + Tailwind
├── tailwind.config.mjs         # Definisi palet warna & font brand
└── package.json                # Daftar paket dependencies
```

---

## 🛠️ Panduan Menjalankan Project (Untuk Pemula)

### Langkah 1: Install Node.js
Pastikan komputer Anda sudah terpasang Node.js (versi 18 ke atas atau LTS).
Buka Terminal / Command Prompt dan jalankan:
```bash
node -v
```
Jika muncul angka versi (misal `v24.20.0`), artinya Node.js sudah siap.

### Langkah 2: Install Dependencies
Buka folder project di terminal, lalu jalankan:
```bash
npm install
```

### Langkah 3: Menjalankan Server Lokal
Jalankan perintah ini:
```bash
npm run dev
```
Buka browser Anda dan kunjungi: **`http://localhost:4321`**. Website akan langsung tampil indah!

---

## 📝 Panduan Setup Notion CMS (Langkah Demi Langkah)

Anda bisa mengelola seluruh artikel website ini dari Notion. Ikuti panduan mudah berikut:

### 1. Buat Database Baru di Notion
1. Buka akun [Notion](https://www.notion.so/).
2. Buat halaman baru (*New Page*), beri judul **"Blog NutriMPASI"**.
3. Di dalam halaman tersebut, ketik `/table view` dan pilih **New database**.
4. Ubah dan tambahkan kolom (Properties) persis seperti tabel di bawah:

| Nama Property | Tipe Property di Notion | Keterangan / Contoh Nilai |
|---|---|---|
| **Title** | `Title` | Judul artikel (cth: *Panduan Lengkap MPASI 6 Bulan*) |
| **Slug** | `Text` | Tautan URL (cth: *panduan-lengkap-mpasi-6-bulan*) |
| **Status** | `Select` | Pilihan: `Published` dan `Draft` (Hanya yang `Published` yang tampil di website) |
| **Date** | `Date` | Tanggal rilis artikel |
| **Tags** | `Multi-select` | Kategori (cth: *Panduan MPASI sesuai usia*, *Tips GTM*, dll) |
| **Excerpt** | `Text` | Ringkasan singkat 1-2 kalimat untuk preview |
| **Cover** | `Files & media` | Foto cover artikel |

### 2. Buat Notion Integration (Mendapatkan Token)
1. Kunjungi [notion.so/my-integrations](https://www.notion.so/my-integrations).
2. Klik tombol **"+ New integration"**.
3. Beri nama (misal: `NutriMPASI Website`).
4. Pilih workspace Notion Anda, lalu klik **Save** / **Submit**.
5. Salin kode **Internal Integration Secret** (kodenya berawalan `secret_...`). Ini adalah `NOTION_TOKEN` Anda.

### 3. Sambungkan Integrasi ke Database Anda
1. Kembali ke halaman Database Notion yang tadi dibuat.
2. Di pojok kanan atas halaman Notion, klik ikon **tiga titik (...)**.
3. Scroll ke bawah, pilih menu **"Connections"** (atau *"Add connections"*).
4. Cari dan pilih nama integrasi Anda (`NutriMPASI Website`), lalu konfirmasi akses.

### 4. Dapatkan Database ID
1. Lihat URL database Anda di browser, bentuknya seperti ini:
   `https://www.notion.so/workspace/8a901234567890abcdef1234567890ab?v=...`
2. Bagian 32 karakter unik sebelum tanda `?v=` adalah **Database ID** Anda:
   Contoh: `8a901234567890abcdef1234567890ab`.

### 5. Masukkan ke File `.env`
Buat file baru bernama `.env` di folder utama project (salin dari `.env.example`), lalu isi dengan data Anda:
```env
NOTION_TOKEN=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=8a901234567890abcdef1234567890ab
SITE_URL=https://nutrimpasi.vercel.app
```

---

## 🌐 Panduan Deploy ke Vercel (Gratis & Cepat)

1. **Upload ke GitHub:**
   - Buat repositori baru di [GitHub](https://github.com/new).
   - Jalankan git di terminal:
     ```bash
     git init
     git add .
     git commit -m "feat: inisialisasi website NutriMPASI"
     git branch -M main
     git remote add origin https://github.com/USERNAME_ANDA/REPOSITORI_ANDA.git
     git push -u origin main
     ```

2. **Deploy di Vercel:**
   - Kunjungi [Vercel](https://vercel.com/) dan login dengan akun GitHub Anda.
   - Klik **"Add New"** > **"Project"**.
   - Pilih repositori `nutrimpasi` yang baru saja di-push.
   - Pada bagian **Environment Variables**, tambahkan:
     - `NOTION_TOKEN` = (isi secret token Notion Anda)
     - `NOTION_DATABASE_ID` = (isi database ID Notion Anda)
     - `SITE_URL` = (misal: `https://nutrimpasi.vercel.app`)
   - Klik **Deploy**.
   - Dalam 1-2 menit, website MPASI Anda resmi aktif dan dapat diakses publik di seluruh dunia! 🚀

---

## 💡 Bantuan & Pertanyaan
Jika Anda membutuhkan bantuan tambahan atau ingin menambah fitur baru, silakan hubungi tim pengembang atau buat issue di repositori ini.
