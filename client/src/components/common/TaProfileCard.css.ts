import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";


export const cardContainer = style({
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    
})

export const defaultBox = style({
    minWidth: "25em",
    minHeight: '25em',
    margin: '0 auto 0 auto',
    padding: "2rem",
    borderRadius: '10px',
    backdropFilter: 'blur(5px)',
    background: 'rgba(255, 255, 255, 0.1)',

    marginBottom: '1em'
})

export const generalCard = style({
    minWidth: "30em",
    maxWidth: '25em'
})

export const largeCard = style({
    minWidth: "60vw"
})


export const cardChildren = style({
    color: vars.colors.complementary
  
})