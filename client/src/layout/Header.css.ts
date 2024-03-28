import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";


export const Header = style({
height: '2.5em'
})

export const Nav = style({
    float: 'left'
})

export const NavList = style({
    overflow: 'hidden',
    marginTop: '5px'
})

export const NavItem = style({
    display: 'inline',
    textAlign: 'center',
    padding: '14px 16px' ,

})

export const NavLink = style({
    textDecoration: 'none',
    color: `${vars.colors.complementary}`,

    ":hover": {
        borderBottom: `${vars.colors.brand} 2px solid`,
        color: `${vars.colors.brand}`,
        cursor: 'pointer',
        transition: 'ease-in-out 0.2s'
    }
})

export const LogoDiv = style({
 float: 'right'
})

export const Logo = style({
    height: '40px'
})