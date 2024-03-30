import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const SignupInputField = style({
    fontSize: '20px',
    boxSizing: 'border-box',
    border: 'solid .5px #626262',
    width: '100%',
    height: '2.5em',
    marginBottom: '1em',
    borderRadius: '10px',
    paddingLeft: '10px',

    ":focus": {
        backgroundColor: `${vars.colors.notWhite}`
    }
})