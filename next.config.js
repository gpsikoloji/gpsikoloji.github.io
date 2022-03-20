module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/hakkimizda": { page: "/hakkimizda" },
      "/iletisim": { page: "/iletisim" },
      "/hizmetlerimiz": { page: "/hizmetlerimiz" },
      "/uzmanlarimiz": { page: "/uzmanlarimiz" },
    };
  },
};
