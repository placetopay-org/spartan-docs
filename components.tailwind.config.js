const plugin = require('tailwindcss/plugin')

module.exports = {
    presets: [
        require('@placetopay/spartan')
    ],
    theme: {},
    variants: {},
    plugins: [plugin(function ({ addComponents, theme }) {
        const buttons = {
            '.btn-white': {
                borderColor: theme('colors.gray.300'),
                color: theme('colors.gray.700'),
                backgroundColor: theme('colors.white'),
                '&:focus': {
                    outline: 'none',
                    borderColor: theme('colors.gray.300'),
                },
                '&:hover': {
                    color: theme('colors.gray.700'),
                    backgroundColor: theme('colors.gray.700'),
                    fontWeight: theme('fontWeight.semibold'),
                },
                '&:active': {
                    color: theme('colors.gray.800'),
                    backgroundColor: theme('colors.gray.50'),
                }
            },
            '.btn-disable': {
                borderColor: theme('colors.gray.300'),
                color: theme('colors.gray.300'),
            }
            
        }

        addComponents(buttons)
    })]
}
