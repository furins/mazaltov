module.exports = {
  reactScriptsVersion: "react-scripts" /* (default value) */,
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'raw-loader',
          },
          {
            type: 'javascript/auto',
            test: /\.mjs$/,
            include: /node_modules/,
          },
        ],
      },
    },
  },
};


