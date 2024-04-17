import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const SecondaryButton = style({
    color: `${vars.colors.brand}`,
    backgroundColor: `${vars.colors.transparent}`,
    lineHeight: '1em',
    borderRadius: '10px',
    fontSize: `${vars.fontSize["2x"]}`,
    cursor: 'pointer',
    border: `solid 1px ${vars.colors.brand}`,
    transition: 'ease-in-out .4s',

    ":hover": {
        backgroundColor: `${vars.colors.brand}`,
        color: `${vars.colors.primary}`
    }
})

export const ButtonContent = style({
    padding: '5px'
})