import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const SideHeaderContainer = style({ 
    zIndex: 1,
    width: '20em',
    borderRight: '1px solid rgba(63, 178, 187, 0.5)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh', 
    flex: '0 0 auto', 

    '@media': {
        'screen and (max-width: 771px)': {
            width: '4em',

        },

        'screen and (max-width: 1200px) and (min-width: 772px)': {
            width: '4em',
        }
    }
});

export const LogoDiv = style({
    marginTop: '2em',
    
    '@media': {
        'screen and (max-width: 771px)': {
            display: 'none'
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            display: 'none'
        }
    }
})

export const SideHeader = style({
    listStyle: 'none',
    width: '100%',
    margin: '0',
    padding: '0',
    paddingTop: '2em',

    '@media': {
        'screen and (max-width: 771px)':{
            paddingTop: 0
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            paddingTop: 0
        }
    }
});

export const SideHeaderItem = style({
    padding: '1em',
    color: 'white',
    textTransform: 'uppercase',
    fontSize: `${vars.fontSize["3x"]}`,
    margin: '0.5em 0',
    height: '3em', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end', 
    textAlign: 'center',

    ':hover': {

        borderRadius: '40px 0 0 40px',
        cursor: 'pointer',
        backgroundColor: 'rgba(63, 178, 187, 0.5)'
    },

    
  });

export const NavIcon = style({
    
})

export const NavText = style({
    margin: '3em',

    '@media': {
        'screen and (max-width: 771px)': {
            display: 'none'
        },

        'screen and (max-width: 1200px) and (min-width: 772px)': {
            display: 'none'
        }
    }
});