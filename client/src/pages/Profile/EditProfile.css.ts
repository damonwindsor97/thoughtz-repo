import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const EditProfile = style({
    width: '70vw',
    maxWidth: '968px',
    margin: '0 auto',
    marginBottom: '5em',
    paddingLeft: '2em',

    '@media': {
        'screen and (max-width: 771px)': {
            width: '70vw',

        },
        'screen and (max-width: 1320px) and (min-width: 772px)': {
            width: '70vw',
            margin: '0 auto'
        }
    }
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