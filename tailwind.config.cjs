/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            backgroundImage: {
                'discoverImg1': "linear-gradient(to right bottom, rgba(7, 64, 40, 1), rgba(7, 64, 40, 1)), url('/src/assets/discoverImg1.jpg')",
                'discoverImg2': "linear-gradient(to right bottom, rgba(7, 64, 40, 1), rgba(7, 64, 40, 1)), url('./src/assets/discoverImg2.jpg')",
                'discoverImg3': "linear-gradient(to right bottom, rgba(7, 64, 40, 1), rgba(7, 64, 40, 1)), url('./src/assets/discoverImg3.jpg')"
            },
            colors: {
                greenGrow: "#074028",
                white: "#FFFFFF",
                grey: "#808080",
                pink: "rgba(200, 196, 196, 0.15)",
                accentGreen: "#3BE0A8",
                offBlack: "#404040",
                aWhite: "#FEFFFF"

            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                Lato: ["Lato", "sans-serif"],
                SPD: ["Manrope", "san-serif"]
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};