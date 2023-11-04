module.exports = {
    // ...
    entry: {
      "app": "src/main.jsx"
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "[name].js",
      sourceMapFilename: "[name].js.map"
    },
    devtool: "source-map"
};