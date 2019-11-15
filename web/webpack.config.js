const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map', // Best practice is to remove this flag in Release builds
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../app/Scripts'),
    },
    externals: {
        //"react": "React", // Uncomment this if you do not want to bundle React and want load it from URL at runtime
        //"react-dom": "ReactDOM" // Uncomment this if you do not want to bundle React DOM and want load it from URL at runtime
    }
};