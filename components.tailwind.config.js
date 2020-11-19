const plugin = require('tailwindcss/plugin')

module.exports = {
    presets: [
        require('@placetopay/spartan')
    ],
    theme: {
        extend: {

        }
    },
    variants: {

    },
    purge: {
        content: [
            './source/**/*.html',
            './source/**/*.js',
            './source/**/*.jsx',
            './source/**/*.ts',
            './source/**/*.tsx',
            './source/**/*.php',
            './source/**/*.vue',
            './source/**/*.twig',
            './source/**/*.md',
        ],
        options: {
            defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
            whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
        },
    },
    plugins: [plugin(function ({ addComponents, theme }) {

    })]
}
