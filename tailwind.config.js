const scrollbar = require('tailwind-scrollbar');

module.exports = {
    'darkMode': false,
    'variants': {
        'extend': {
            'textColor': ['active', 'visited'],
        },
    },
    'plugins': [scrollbar],
};
