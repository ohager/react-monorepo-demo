module.exports = {
    input: "./src/index.js",
    output: {
        moduleName: "acme$atoms",
        fileName: "acme.atoms[min].js",
        format: ["iife", "iife-min"],
        dir: "./dist",
    },
    extendRollupConfig: (conf) => {
        conf.inputConfig.preserveSymlinks = true;
        return conf
    },
    ['node-resolve']: {
        jsnext: true,
        preferBuiltins: true,
        browser: true
    },
    plugins: {
        babel: {
            presets: ["@babel/preset-react"],
        },
        commonjs: {},
        replace: {
            preventAssignment: true,
        },
        ['auto-external']: {
            builtins: false,
            dependencies: false,
            peerDependencies: true,
        }
    },
    env: {
        NODE_ENV: "production"
    },

};
