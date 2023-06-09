module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: "babel-loader",
            },
        ],
    },
};
