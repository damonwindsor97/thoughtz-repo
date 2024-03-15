import { style } from "@vanilla-extract/css";
import { vars } from '../../styles/themes.css'

export const LoginCard = style({
    marginTop: '1em',
    width: '25em',
    height: '20em',
    borderRadius: '50px',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    backgroundColor: `${vars.colors.primary}`
})

export const CardContent = style({
    textAlign:'center',
    padding: '1.5em'
})

export const CardInputs = style({

})

export const LoginInputField = style({
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


export const CardFooter = style({
    marginTop: '1.5em'
})

export const AltSignIn = style({
    marginTop: '1em'

})

export const ClerkLogo = style({
    width: '40px',
    verticalAlign: 'middle'

})