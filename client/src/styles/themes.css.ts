import { createGlobalTheme } from '@vanilla-extract/css'


export const root = createGlobalTheme(":root", {
    fontFamily: {
        brand: "",
        body: "Inter, apple-system, sans-serif",

    },

    fontSize: {
        '1x': '12px',
        '2x': '16px',
        '3x': '20px', 
        '4x': '24px', 
        '5x': '28px',
        '6x': '32px' 
    },

    fontWeight: {
        light: "200",
        normal: "400",
        bold: "600",
        bolder: "700",
        extraBold: "800",
        boldest: "900"
    },

    colors: {
        primary: 'rgb(255, 255, 255)',
        complementary: 'rgb(0, 0, 0)',
        brand: "rgb(0, 200, 212)",
        brandLight: 'rgb(219, 243, 243)',
        brandDark: 'rgb(29, 135, 141)',
        notWhite: '#F9F9F9'
    },
    space: {
        none: '0',
        '1x': '8px',
        '2x': '16px',
        '3x': '24px',
        '4x': '32px',
        '5x': '40px',
        '6x': '48px',
      },

})

export const vars = { ...root };