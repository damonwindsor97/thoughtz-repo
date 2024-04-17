import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";


export const Header = style({
    display: 'flex',
    boxShadow: 'rgba(255, 255, 255, 0.16) 0px 1px 4px',
    alignItems: 'center',
    color: `${vars.colors.complementary}`,
    position: 'relative',
    zIndex: 1,
    width: '100%',
    backgroundColor: `${vars.colors.transparent}`
})

export const Nav = style({
    textAlign: 'center',
    margin: 'auto',
    width: '40em',
});
export const NavList = style({
    margin: '1em',
    listStyle: 'none'
})

export const NavItem = style({
    display: 'inline-block',
    textAlign: 'center',
    margin: '0px 32px',
    position: 'relative',
    fontSize: `${vars.fontSize["1x"]}`
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
    border: `solid 1px ${vars.colors.brandLight}`,
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
    transition: 'ease-in-out 0.4s',
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