// const nextConfig = {
//   reactStrictMode: true,
//   // أضف أي إعدادات إضافية هنا
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // إعدادات Next.js الخاصة بك
  // output: 'standalone',
  // distDir: 'dist',
  images: {
    domains: ['assets.aceternity.com'], // Add your image domain here
  },
};

export default nextConfig;