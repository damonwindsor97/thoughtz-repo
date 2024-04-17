import { style, globalKeyframes } from '@vanilla-extract/css'
import { vars } from '../../styles/themes.css'

const glow = 'globalGlow';

export const CardContainer = style({
    width: '25em',
    marginBottom: '5em',
})

export const AuthMenu = style({
    textAlign: 'center',
    paddingBottom: '20px'
})

export const TabBlock = style({
    display: "inline-block",
    width: '30%',
    textAlign:'center'
})

export const LoginMenuItem = style({
    padding: '1px 10px 1px 10px',
    background: "transparent",
    borderStyle: 'none',
    cursor: 'pointer',
    color: "#969696",
    fontSize: `${vars.fontSize['4x']}`,

    ":hover": {
        color: `${vars.colors.complementary}`
    }
})

export const ActiveTab = style({
    backgroundColor: 'rgba(0, 200, 212, .2)', 
    color: `${vars.colors.complementary}`,
    borderRadius: '20px'
});

//  SIGNUP
export const SignupCard = style({
    marginTop: '1em',
    width: '25em',
    height: '30em',
    borderRadius: '50px',
    // boxShadow: `0px 0px 100px 10px ${vars.colors.brand}`,
    // animation: `${glow} 5s infinite`,
    backgroundColor: `${vars.colors.complementary}`
})

// globalKeyframes(glow, {
//     '0%': {boxShadow: `0px 0px 100px 10px ${vars.colors.brand}`},
//     '25%': {boxShadow: `0px 0px 100px 10px ${vars.colors.brandDark}`},
//     '50%': {boxShadow: `0px 0px 100px 10px ${vars.colors.brand}`},
//     '75%': {boxShadow: `0px 0px 100px 10px ${vars.colors.brandDark}`},
//     '100%': {boxShadow: `0px 0px 100px 10px ${vars.colors.brand}`},
// })

export const CardContent = style({
    textAlign:'center',
    padding: '1.5em'
})


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

export const LoginCard = style({
    marginTop: '1em',
    width: '25em',
    height: '20em',
    borderRadius: '50px',

    backgroundColor: `${vars.colors.complementary}`,
    // boxShadow: `0px 0px 100px 10px ${vars.colors.brand}`,
    // animation: `${glow} 5s infinite`,
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

export const passwordInfo = style({
    fontSize: `${vars.fontSize['1x']}`,
    padding: '0',
    margin: '0'
})

