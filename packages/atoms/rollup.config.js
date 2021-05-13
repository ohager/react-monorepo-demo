import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import {terser} from "rollup-plugin-terser";
import bundleSize from 'rollup-plugin-bundle-size';
import replace from 'rollup-plugin-replace';

const globals = {
    react: 'React',
    '@emotion/react': 'emo_react',
    '@emotion/styled': 'emo_styled',
}

export default [
    {
        input: 'src/index.js',
        output: [{
            name: 'acme$atoms',
            file: "./dist/acme.atoms.min.js",
            format: "umd",
            plugins: [terser()],
            sourcemap: true,
            globals,
        }, {
            name: 'acme$atoms',
            file: "./dist/acme.atoms.js",
            format: "umd",
            globals
        }],
        plugins: [
            babel({
                presets: ['@babel/preset-react'],
                plugins: ['@emotion']
            }),
            peerDepsExternal(),
            resolve({
                dedupe: ['react', 'react-dom', '@emotion/styled', '@emotion/react']
            }),
            commonjs(),
            bundleSize(),
            replace({
                'process.env.NODE_ENV': JSON.stringify( 'production' )
            }),
        ]
    }
];
