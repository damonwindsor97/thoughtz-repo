import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const EditProfile = style({
    width: '968px',
    margin: '0 auto',
    marginBottom: '5em',
    paddingLeft: '2em'
})

export const InputField = style({
    fontSize: '16px',
    color: `${vars.colors.complementary}`,
    boxSizing: 'border-box',
    border: 'solid .5px #626262',
    width: '100%',
    height: '2.5em',
    marginBottom: '1em',
    borderRadius: '10px',
    paddingLeft: '10px',
    backgroundColor: 'transparent',

    ":focus": {
        border: `${vars.colors.notWhite}`
    }
})

export const TextAreaField = style({
    fontSize: '16px',
    color: `${vars.colors.complementary}`,
    boxSizing: 'border-box',
    border: 'solid .5px #626262',
    width: '100%',
    height: '10em',
    marginBottom: '1em',
    borderRadius: '10px',
    paddingLeft: '10px',
    backgroundColor: 'transparent',

    ":focus": {
        border: `${vars.colors.notWhite}`
    }
})

export const DisabledInputField = style({
    fontSize: '16px',
    color: `grey`,
    boxSizing: 'border-box',
    border: 'solid .5px #626262',
    width: '100%',
    height: '2.5em',
    marginBottom: '1em',
    borderRadius: '10px',
    paddingLeft: '10px',
    backgroundColor: 'transparent',

    ":focus": {
        border: `${vars.colors.notWhite}`
    }
})

export const CurrentImageDiv = style({
    textAlign: 'center',
    margin: '1em'
})

export const CurrentImageText = style({
    color: `${vars.colors.complementary}`
})