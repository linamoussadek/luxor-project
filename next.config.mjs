/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/luxor/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/luxor' : '',
};

export default nextConfig;
