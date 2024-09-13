/* eslint-env node */

const nextConfig = {
  webpack: config => {
    const oneOfRule = config.module.rules.find(rule => rule.oneOf);

    // Next.js TS ayarlarını yapılandırıyoruz.
    const tsRules = oneOfRule.oneOf.filter(rule => rule.test && rule.test.toString().includes('tsx|ts'));

    tsRules.forEach(rule => {
      rule.include = undefined;
    });

    return config;
  },
  compress: true,
  generateEtags: true,
  pageExtensions: ['tsx', 'mdx', 'ts'],
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,  // Statik dosya yolları için trailingSlash kullanıyoruz
  images: {
    unoptimized: true, // Statik export için optimize edilmemiş görüntüler kullanıyoruz
  },
  output: 'export',  // Statik export modunu etkinleştiriyoruz
  basePath: '/react-erhan-template', // GitHub repo adı
  assetPrefix: '/react-erhan-template/', // GitHub Pages için asset yolunu ayarlıyoruz
};

module.exports = nextConfig;
