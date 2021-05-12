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
        output: [
            {
                name: 'acme$molecules',
                file: "./dist/acme.molecules.min.js",
                format: "umd",
                plugins: [terser()],
                sourcemap: true,
                globals
            },
            {
                name: 'acme$molecules',
                file: "./dist/acme.molecules.js",
                format: "umd",
                globals
            }],
        plugins: [
            babel({
                babelHelpers: 'bundled',
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
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
        ]
    }
];
