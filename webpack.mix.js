
const mix = require('laravel-mix');
mix.js('resources/js/app.js', 'public/js')
   .setPublicPath('./')
   .sass('resources/sass/app.scss', 'public/css')
   .options({
    processCssUrls: false,
    });