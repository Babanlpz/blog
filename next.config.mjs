/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "res.cloudinary.com",
      "images.unsplash.com",
      "source.unsplash.com",
      "firebasesource.com",
      "firebasestorage.googleapis.com",
      "firebasestorage.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

export default nextConfig;
