import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import {terser} from "rollup-plugin-terser";

export default [
    {
        input: 'src/index.js',
        output: [{
            name: 'acme$atoms',
            file: "./dist/acme.atoms.min.js",
            format: "umd",
            plugins: [terser()],
            sourcemap: true,
        },{
            name: 'acme$atoms',
            file: "./dist/acme.atoms.js",
            format: "umd",
        }],
        plugins: [
            babel({
                presets: ['@babel/preset-react']
            }),
            peerDepsExternal(),
            resolve(),
            commonjs()
        ]
    }
];
