const plugin = require("tailwindcss/plugin");

module.exports = {
    mode: "jit",
    content: ["./src/*.html"],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".my-rotate-y-180": {
                    'transform': "rotateY(180deg)",
                },
                ".preserve-3d": {
                    'transformStyle': "preserve-3d",
                },
                ".perspective": {
                    'perspective': "1000px",
                },
                ".backface-hidden": {
                    'backfaceVisibility': "hidden",
                },
            });
        }),
    ],
};