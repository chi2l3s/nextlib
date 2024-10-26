/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fgfldgpyxsqkdjhdcfaf.supabase.co'
            }
        ]
    }
};

export default nextConfig;
