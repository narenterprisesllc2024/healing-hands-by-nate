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
    const securityHeaders = [
      // HSTS: force HTTPS for 2 years, includeSubDomains, preload-eligible
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      // Block clickjacking
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      // Prevent MIME-type sniffing
      { key: "X-Content-Type-Options", value: "nosniff" },
      // Don't leak full referrer to third parties
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      // Block browser APIs we don't use
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(self), payment=()"
      }
    ];

    return [
      {
        source: "/:path*",
        headers: securityHeaders
      },
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
