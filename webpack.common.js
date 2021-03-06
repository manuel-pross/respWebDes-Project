const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/index.js",
        vendor: "./src/vendor.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html", // Damit gibt man an, dass die HTML dynamisch erzeugt werden soll mit eben jenem Template. Das brauchen wir weil das JS-File dynamisch reinkommen soll
            inject: "body",
            scriptLoading: "blocking",
            favicon: "./src/assets/images/favicon.png"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false,
                    sources: {
                        list: [
                            // All default supported tags and attributes
                            "...",
                            {
                                tag: "img",
                                attribute: "data-src",
                                type: "src",
                            },
                        ],
                    },
                },
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images",
                    },
                },
            },
            {
                test: /\.(eot|eot?#iefix|woff2|woff|ttf|svg#Alegreya)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts",
                    },
                },
            },
        ],
    },
};
