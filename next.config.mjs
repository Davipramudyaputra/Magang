// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Mengaktifkan static export
    images: {
      unoptimized: true, // Menonaktifkan optimisasi gambar
    },
  };
  
  export default nextConfig;
  