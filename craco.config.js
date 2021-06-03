/* eslint-disable global-require */
module.exports = {
    style: {
        postcss: {
            // eslint-disable-next-line import/no-extraneous-dependencies
            plugins: [require('tailwindcss'), require('autoprefixer')],
        },
    },
};
