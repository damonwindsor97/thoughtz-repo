import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const Button = style({
    color: `${vars.colors.complementary}`,
    backgroundColor: `${vars.colors.brandDark}`,
    width: '100%',
    height: '2em',
    lineHeight: '2em',
    borderRadius: '30px',
    fontWeight: `${vars.fontWeight.extraBold}`,
    fontSize: `${vars.fontSize["5x"]}`,
    cursor: 'pointer',
    borderStyle: 'none',

    ":hover": {
        backgroundColor: `${vars.colors.brand}`
    }
})