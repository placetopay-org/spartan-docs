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
    plugins: [plugin(function ({ addComponents, theme }) {

    })]
}
