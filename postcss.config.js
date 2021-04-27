const purgecssOption = {
    'content': [
        './src/pages/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
    ],
    'defaultExtractor': (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};

module.exports = {
    'plugins': {
        'tailwindcss': {},
        'postcss-flexbugs-fixes': {},
        'autoprefixer': {},
        '@fullhuman/postcss-purgecss': purgecssOption,
        'cssnano': {
            'preset': 'default',
        },
        'postcss-preset-env': {
            'autoprefixer': {
                'flexbox': 'no-2009'
            },
            'stage': 3,
            'features': {
                'custom-properties': false
            }
        }
    }
}
