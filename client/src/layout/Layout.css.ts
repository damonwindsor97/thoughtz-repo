import { style, globalKeyframes } from '@vanilla-extract/css'
import { vars } from '../styles/themes.css'

const backgroundMove = 'globalMove';

globalKeyframes(backgroundMove, {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
});

export const app = style({
    fontFamily: vars.fontFamily.body,
    background: vars.colors.primary,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
})

export const appContent = style({
    margin: `${vars.space.none} 0`,
    flex: 1,
    background: 'linear-gradient(43deg, rgba(0,0,0,0) 0%, rgba(5,28,43,0.5802696078431373) 49%, rgba(0,0,0,0) 90%)',
    backgroundSize: '400% 400%',
    animation: `${backgroundMove} 20s linear infinite`,
})