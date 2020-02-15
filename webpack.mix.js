let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')


mix
    .js('./app/main.js', 'public/assets/js/main.js')
    .sass('./app/scss/styles.scss', 'public/assets/css/styles.css')
    .setPublicPath('public')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    });
