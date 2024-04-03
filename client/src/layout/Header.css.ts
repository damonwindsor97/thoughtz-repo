import { style, globalStyle } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";


export const Header = style({
    display: 'flex',
    backgroundColor: `${vars.colors.primary}`,
    borderBottom: `solid 1px ${vars.colors.notWhite}`,
    alignItems: 'center',
})

export const Nav = style({
    textAlign: 'center',
    margin: 'auto',
    width: '40em',
});
export const NavList = style({
    margin: '2.5em',
    listStyle: 'none'
})

export const NavItem = style({
    display: 'inline-block',
    textAlign: 'center',
    margin: '14px 16px',
    position: 'relative',
});

export const NavLink = style({
    textDecoration: 'none',
    color: `${vars.colors.complementary}`,
    transition: 'ease-in-out 0.4s',
    ":hover": {
        color: `${vars.colors.brand}`,
        cursor: 'pointer',
    }
})

export const AuthDiv = style({
float: 'right',
width: '30%'
})

export const Dropdown = style({
    position: 'absolute',
    backgroundColor: `${vars.colors.primary}`,
    minWidth: '190px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    display: 'none',
    zIndex: 1,
    padding: '1em',
    borderRadius: '5px',
});

export const DropdownArrow = style({
    transition: '0.2s linear all',
});

export const DropdownOpen = style({
    display: 'block',
});

export const DropdownItem = style({
    textDecoration: 'none',
    listStyle: 'none',
    color: `${vars.colors.complementary}`,
    transition: 'ease-in-out 0.4s',
    textAlign: 'start',
    margin: '0px 0 10px 0',
    fontSize: `${vars.fontSize["2x"]}`,

    ":hover": {
        color: `${vars.colors.brand}`,
        cursor: 'pointer',
    }
});

export const DropdownLink = style({
    textDecoration: 'none',
    listStyle: 'none',
    color: `${vars.colors.complementary}`,
    transition: 'ease-in-out 0.4s',
    ":hover": {
        color: `${vars.colors.brand}`,
        cursor: 'pointer',
    }
})

export const RightArrow = style({
    transition: '0.2s linear all',
  });
  
  export const IconHover1 = style({
    transform: 'rotate(180deg)',
  });
  
  /* Add a hover effect to rotate the arrow */
  export const RightArrowHover = style({
    ':hover': {
      transform: 'rotate(180deg)',
    },
  });