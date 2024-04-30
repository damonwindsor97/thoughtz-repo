import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const Footer = style({
    height: '8em',
    background: 'transparent',
    width: '100%'
})

export const LogoDiv = style({
    paddingTop: '2.5em',
    float: 'left',
    marginLeft: '2em'
})

export const Logo = style({
    width: '150px'
})

export const Nav = style({
    float: 'right',
    width: '450px',
    verticalAlign: 'middle',
    paddingTop: '3.5em'
})

export const NavItem = style({
    display: 'inline-block',
    paddingLeft: '35px',
    color: `${vars.colors.notWhite}`,

    '@media': {
        'screen and (max-width: 771px)': {
            fontSize: `${vars.fontSize["1x"]}`
        }
    }
})
