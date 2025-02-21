// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images:{
//     domains:  ["images.unsplash.com", "plus.unsplash.com", "revision.codesupply.co", "res.cloudinary.com"],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Optional: specifies a pattern for the path
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**', // Optional: specifies a pattern for the path
      },
      {
        protocol: 'https',
        hostname: 'revision.codesupply.co',
        pathname: '/**', // Optional: specifies a pattern for the path
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // Optional: specifies a pattern for the path
      },
    ],
  },
  /* Other config options here */
};

export default nextConfig;