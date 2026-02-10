/** @type {import('next').NextConfig} */
const isGitHubPages = !!process.env.GITHUB_REPOSITORY
const repoName = isGitHubPages
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : "NYPage26"
const basePath = isGitHubPages ? `/${repoName}` : ""
const assetPrefix = basePath ? `${basePath}/` : ""

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
