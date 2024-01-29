/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
};

export default withMDX()(nextConfig);
