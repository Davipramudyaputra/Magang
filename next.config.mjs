/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Menggunakan export statis
    distDir: 'out', // Menyimpan hasil build di folder 'out'
    images: {
      unoptimized: true, // Menonaktifkan optimasi gambar karena Firebase tidak mendukung optimasi gambar Next.js
    },
    trailingSlash: true, // Menambahkan trailing slash untuk semua URL, cocok untuk hosting statis
  };

export default nextConfig;
