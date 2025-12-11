/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'brand-teal': '#02a69b',
                'brand-teal-dark': '#01746c',
                'neon-purple': '#a855f7',
                'neon-teal': '#14b8a6',
            },
            fontFamily: {
                'display': ['"Playfair Display"', 'serif'],
                'sans': ['"Inter"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
