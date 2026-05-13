/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "www.vagaro.com" }
    ]
  },
  async headers() {
    return [
      {
        // Force download for any file under /downloads/ (PDFs, etc.)
        // Browsers trigger "Save As" instead of inline preview.
        source: "/downloads/:path*",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Neck-Reset-Healing-Hands-By-Nate.pdf"'
          },
          { key: "Cache-Control", value: "public, max-age=3600" }
        ]
      }
    ];
  }
};

export default nextConfig;
