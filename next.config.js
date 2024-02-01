/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  output: 'export',
  env: {
    NEXT_PUBLIC_BUILD_ID: nextBuildId.sync({
     dir: __dirname,
     describe: true
   })
 },
}

module.exports = nextConfig;
