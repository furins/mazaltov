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
        ],
      },
    },
  },
};


