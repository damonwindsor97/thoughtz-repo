import { style } from '@vanilla-extract/css'
import { vars } from '../styles/themes.css'

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
    backgroundColor: `${vars.colors.brandLight}`
})