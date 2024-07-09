/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      '6xl': "56px", // 56px h1
      '5xl': '3rem',    // 48px h2
      '4xl': '2.5rem',  // 40px h3
      '3xl': '2rem',    // 32px h4
      '2xl': '1.75rem', // 28px h5
      'xl': '1.5rem', // 24px h6
      'lg': '1.25rem', //20px subtitle
      'md': '1.125rem', // 18px body-lg, button-lg
      'base': '1rem', //16px body-md, button-md
      'sm': '0.875rem',  // 14px body-sm, button-sm
      'xs': "0.75rem", // 12px caption
      '2xs': "0.625rem", // 10px body-xs
      '3xs': "0.5rem", // 8px body-2xs
      
      },
    extend: {

      colors: {
        brand:{
          100: "#F0FAFF",
          200: "#DFF3FF",
          300: "#B9E9FE",
          400: "#008ECB",
          500: "#007AB1",
          600: "#056087",
          700: "#0A4E70"
        },
        neuter: {
          transparente: "#00000000",
          50: "#ffffff",
          100: "#EFEFEF",
          200:"#DCDCDC",
          300:"#BDBDBD",
          400:"#989898",
          500:"#7C7C7C",
          600:"#656565",
          700:"#525252",
          800:"#464646",
          900:"#3D3D3D"
        },

        system: {
          success: {
            100: "#DEFAE1",
            200: "#BFF3C5",
            300: "#8DE899",
            400: "#54D465",
            500: "#2AAF3C",
            600: "#1F9A2F",
            700: "#1C7929"
          },
          info: {
            100: "#E0F1FE",
            200: "#B9E4FE",
            300: "#7CCFFD",
            400: "#0CA0EB",
            500: "#0082CE",
            600: "#0164A3",
            700: "#065586"
          },
          warning: {
            100: "#FFF3C5",
            200: "#FFE785",
            300: "#FFD546",
            400: "#FFC01B",
            500: "#FF9D00",
            600: "#E27500",
            700: "#BB5002"
          },
          
          danger: {
            100: "#FFE4E5",
            200: "#FDCED1",
            300: "#FCA5AC",
            400: "#F24157",
            500: "#CE163B",
            600: "#9D1434",
            700: "#871433"
          }
        }
      },
       spacing: {
        none: '0',
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
        '5xl': '36px',
        '6xl': '40px',
        '7xl': '44px',
        '8xl': '48px',
        '9xl': '52px',
      },
     
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      rounded: {
        none: '0',
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px´',
        '2xl': '16px´',
        '3xl': '24px´',
        'full': '999px´'
      },

      boxShadow: {
        "extra-light": "0px 2px 4px 0px rgba(14, 31, 53, 0.12)",
        "light": "0px 3px 7px 0px rgba(14, 31, 53, 0.12",
      }
    },
  },
  plugins: [],
}

