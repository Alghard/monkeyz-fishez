/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        screens: {
            xs: { max: "639px" },

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }
        },
        fontSize: {
            xxs: "0.35rem",
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
        },
        extend: {
            animation: {
                "soft-zoom": "soft-zoom 1s infinite",
                "bouncy-move": "bouncy-move 3s linear 1s infinite alternate",
            },
            keyframes: {
                "soft-zoom": {
                    "0%, 100%": { transform: "scale(1.1)" },
                },
                "bouncy-move": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                alfaslab: ["Alfa Slab One", "serif"],
            },
            //! MON BEFORE/AFTER S'AFRICHE MAIS PAS MON IMAGE !! IDK WHY STILL NEED TO DIG ABOUT IT, I WANT TO CRY RN, ERROR : "GET /images/lianeD.svg 404 in 28ms"
            // content: {
            //     lianeG: 'url("/images/lianeG.svg")',
            //     lianeD: 'url("/images/lianeD.svg")',
            // },
            //! Si j'utilise un lien internet ça marche... mais pas avec mon image
            content: {
                lianeG: 'url("https://picsum.photos/100")',
                lianeD: 'url("https://picsum.photos/100")',
            },
        },
    },
    plugins: [],
};
