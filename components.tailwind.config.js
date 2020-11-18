const plugin = require('tailwindcss/plugin')

module.exports = {
    presets: [
        require('@placetopay/spartan')
    ],
    theme: {
        extend: {
            opacity: {
                '65': '0.65'
            }
        }
    },
    variants: {},
    plugins: [plugin(function ({ addComponents, theme }) {
        const buttons = {
            '.btn': {
                padding: '.5rem 1rem',
                borderWidth: '1px',
                borderRadius: '.375rem',
                fontsize: '1rem',
                lineHeight: '1.5rem',
                fontWeight: '500',
                transitionProperty: theme('transitionProperty.default'),
                transitionTimingFunction: theme('transitionTimingFunction.in-out'),
                transitionDuration: theme('transitionDuration.150'),
                '&:focus': {
                    outline: 'none',
                    borderColor: theme('colors.gray.700'),
                    boxShadow: theme('boxShadow.outline-gray'),
                },
                //
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
            },

            '.btn-white': {
                borderColor: theme('colors.gray.300'),
                color: theme('colors.gray.700'),
                backgroundColor: theme('colors.white'),
                '&:focus': {
                    outline: 'none',
                    borderColor: theme('colors.gray.300'),
                },
                '&:hover': {
                    color: theme('colors.gray.500'),
                    //
                    backgroundColor: theme('colors.gray.50'),
                },
                '&:active': {
                    color: theme('colors.gray.800'),
                    backgroundColor: theme('colors.gray.50'),
                }
            },

            '.btn-disabled': {
                opacity: theme('opacity.65'),
                pointerEvents: 'none',
            }
        }

        addComponents(buttons)
    })]
}
