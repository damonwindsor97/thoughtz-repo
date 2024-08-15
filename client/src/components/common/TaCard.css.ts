import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";


export const cardContainer = style({
    display: "flex",
    flexDirection: "column",
    
})

export const defaultBox = style({
    minHeight: '25em',
    margin: '0 auto 0 auto',
    padding: "2rem",
    borderRadius: '10px',
    boxShadow: 'rgba(255, 255, 255, 0.16) 0px 1px 4px',
    backgroundColor: `rgba(50, 50, 50, 0.2)`,
    color: `${vars.colors.complementary}`,
    textAlign: 'center',

    '@media': {
        'screen and (max-width: 771px)': {
            width: '70vw',
            margin: '0 auto'
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            width: '70vw',
            margin: '0 auto'
        }
    }
})

export const smallCard = style({
    minWidth: "20em",
    maxWidth: '20em',
    minHeight: '20em',
    boxShadow: 'none',
    margin: 'none',

    '@media': {
        'screen and (max-width: 771px)': {
            minWidth: "15em",
            maxWidth: '15em',
            minHeight: '15em',
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            minWidth: "16em",
            maxWidth: '16em',
            minHeight: '16em',
        }
    }
})

export const generalCard = style({
    width: "50em",

    '@media': {
        'screen and (max-width: 771px)': {
            width: '70vw',
            margin: '0 auto'
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            width: '70vw',
            margin: '0 auto'
        }
    }
})

export const largeCard = style({

})


export const cardTitle = style({
    color: vars.colors.brandDark,
    paddingBottom: "0.5rem",
    fontSize: "2em",
    textTransform: "uppercase",
    textAlign: 'center'
})

export const cardChildren = style({
    color: vars.colors.complementary
  
})