import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const Footer = style({
    height: '15em',
    backgroundColor: `${vars.colors.notWhite}`
})

export const LogoDiv = style({
    paddingTop: '5em',
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
    paddingTop: '7em'
})

export const NavItem = style({
    display: 'inline-block',
    paddingLeft: '35px',

})