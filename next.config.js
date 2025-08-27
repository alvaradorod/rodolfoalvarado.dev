/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true } // si usas <Image/> en export estático
};
module.exports = nextConfig;
