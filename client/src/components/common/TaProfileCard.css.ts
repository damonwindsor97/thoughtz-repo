import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";


export const cardContainer = style({
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    
})

export const defaultBox = style({
    minWidth: "40vw",
    minHeight: '25em',
    margin: '0 auto 0 auto',
    padding: "2rem",
    borderRadius: '0 0 10px 10px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    backgroundColor: `${vars.colors.primary}`,
    marginBottom: '1em'
})

export const generalCard = style({
    minWidth: "40vw"
})

export const largeCard = style({
    minWidth: "60vw"
})


export const cardChildren = style({
    color: vars.colors.complementary
  
})