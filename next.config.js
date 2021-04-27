const path = require('path');
const withPWA = require("next-pwa");

// for PWA
module.exports = withPWA({
    pwa: {
        dest: "public",
        // runtimeCaching: [],
    },
});

// for AMP
const experimental = {
    amp: {
        skipValidation: false
    }
}

module.exports = {
    async redirects() {
        return [
            {
                source: '/blog',
                destination: '/blog/1',
                permanent: true,
            },
            {
                source: '/blog/post',
                destination: '/blog/1',
                permanent: true,
            },
        ]
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.node = {
                fs: 'empty',
            };
        }
        config.resolve.alias = {
            ...config.resolve.alias,
            '~': path.resolve(__dirname, './src'),
        };
        return config;
    },
    experimental,
};