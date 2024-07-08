/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/luxorproject/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/luxorproject' : '',
    trailingSlash: true,
    output: 'export',
};

export default nextConfig;
