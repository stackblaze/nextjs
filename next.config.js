/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'export',

  // Add the generateBuildId function
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH;
  },
}

module.exports = nextConfig;
