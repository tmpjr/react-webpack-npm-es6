var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/main'),
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
        ]
    }
};
