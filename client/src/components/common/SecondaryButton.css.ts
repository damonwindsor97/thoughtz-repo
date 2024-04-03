import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const SecondaryButton = style({
    color: `${vars.colors.primary}`,
    backgroundColor: `${vars.colors.brand}`,
    lineHeight: '1.5em',
    borderRadius: '5px',
    fontSize: `${vars.fontSize["2x"]}`,
    cursor: 'pointer',
    borderStyle: 'none',
    transition: 'ease-in-out .4s',

    ":hover": {
        backgroundColor: `${vars.colors.brandDark}`
    }
})

export const ButtonContent = style({
    padding: '5px'
})