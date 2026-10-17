# Shmily Darise | Media Belajar Fisika

Website pembelajaran Fisika SMA tentang kapasitor, dibuat dengan HTML, CSS, dan JavaScript murni agar mudah dipelajari serta tidak membutuhkan backend atau instalasi paket.

## Fitur

- Landing page responsif dengan navigasi mobile dan mode terang/gelap.
- Galeri foto ilustratif, animasi halus saat menggulir, efek hover, dan dukungan pengaturan reduced-motion.
- 16 submateri dengan daftar isi, pencarian, bookmark, penanda selesai, dan progres lokal.
- Simulasi kapasitor keping sejajar: luas, jarak, bahan dielektrik, tegangan; menghitung C, Q, U, dan E secara langsung.
- Eksperimen rangkaian seri/paralel dengan 2–6 kapasitor, diagram, kapasitansi ekuivalen, dan distribusi tegangan/muatan untuk rangkaian ideal.
- Delapan kalkulator fisika, termasuk validasi input, rumus, substitusi, langkah, dan salin hasil.
- Kuis pilihan ganda dengan tiga tingkat, pembahasan, timer opsional, skor terbaik, dan riwayat lokal.
- Rangkuman rumus, glosarium, catatan belajar, dan cetak rangkuman.

## Menjalankan secara lokal

Buka `index.html` di browser modern. Untuk pengalaman lebih konsisten, jalankan server lokal dari folder proyek:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000`.

## Publikasi melalui GitHub Pages

1. Buat repository baru di GitHub, misalnya `belajar-kapasitor`.
2. Unggah `index.html`, `styles.css`, `app.js`, `physics-tests.js`, dan `README.md` ke root repository.
3. Buka **Settings → Pages**.
4. Di bagian **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu simpan.
6. Tunggu deployment selesai dan buka URL Pages yang diberikan GitHub.

## Penyimpanan dan privasi

Progres, bookmark, catatan, tema, dan skor disimpan menggunakan `localStorage` di browser perangkat yang digunakan. Data tidak tersinkron otomatis ke perangkat lain. Menghapus data situs/browser dapat menghapus progres tersebut.

## Catatan model fisika

Rumus kapasitor keping sejajar `C = ε₀ εᵣ A/d` mengasumsikan pelat ideal dan efek tepi diabaikan. Medan listrik ideal dihitung sebagai `E = V/d`. Simulasi tidak memodelkan breakdown dielektrik, kebocoran, ESR, atau efek tepi. Untuk rangkaian seri, model mengasumsikan kapasitor ideal dengan kondisi awal netral; untuk paralel, setiap kapasitor berbagi tegangan terminal yang sama.

## Kredit

Website ini dikembangkan oleh **Shmily Darise**. Foto pada galeri adalah ilustrasi pendukung pembelajaran dari Unsplash dan memerlukan koneksi internet agar dapat dimuat.
