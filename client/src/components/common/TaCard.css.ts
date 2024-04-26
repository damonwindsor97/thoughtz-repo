import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";


export const cardContainer = style({
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    
})

export const defaultBox = style({
    minWidth: "50em",
    minHeight: '25em',
    margin: '0 auto 0 auto',
    padding: "2rem",
    borderRadius: '10px',
    boxShadow: 'rgba(255, 255, 255, 0.16) 0px 1px 4px',
    backgroundColor: `rgba(50, 50, 50, 0.2)`,
    color: `${vars.colors.complementary}`,
    textAlign: 'center'
})

export const smallCard = style({
    minWidth: "20em",
    maxWidth: '20em',
    minHeight: '20em',
    boxShadow: 'none',
    margin: 'none',
})

export const generalCard = style({
    maxWidth: "50em",
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