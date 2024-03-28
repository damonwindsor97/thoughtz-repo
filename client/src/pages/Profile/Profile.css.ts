import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const profilePage = style({

})

export const profileContainer = style({
    minWidth: '60vw',
    marginTop: '5em',
})

export const coverPicture = style({
    height: '15em',
    margin: 'auto',
    display: 'flex',
    minWidth: "40vw",
    maxWidth: '40vw',
    borderRadius: '10px 10px 0px 0px',
    
})

export const profilePicture = style({
    height: '10em',
    borderRadius: '100px',
    margin: "auto",
    display: 'flex',
})

export const cardContainer = style({
    marginTop: '0',
    borderRadius: '0 0 10px 10px',
})

export const profileDetails = style({
    textAlign: 'center',
    margin: '1em'
})

export const profileContent = style({

})

export const username = style({
    textAlign: 'center',
    fontWeight: `${vars.fontWeight.light}`
})

export const fullname = style({
    textAlign: 'center',
    fontWeight: `${vars.fontWeight.bold}`
})

export const profileCard = style({
    borderRadius: '10px'
})