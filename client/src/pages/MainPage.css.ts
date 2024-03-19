import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const BannerContainer = style({
    textAlign: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    borderRadius: '10px',
    width: '50em',
    margin: '0 auto',
    padding: '5em',
    backgroundColor: `${vars.colors.primary}`,

    transform: 'translateY(50%)',

})


const subtleBounce = keyframes({
    '0%': {},
    '50%': {},
    '100%': {}
})

export const bounce = style({
    animationName: 'subtleBounce',
    animationDuration: '4s',
    animationIterationCount: 'infinite',


})