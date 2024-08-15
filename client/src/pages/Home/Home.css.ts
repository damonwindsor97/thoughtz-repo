import { style, globalKeyframes } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

const backgroundMove = 'globalMove';

globalKeyframes(backgroundMove, {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
});

export const HomeBackground = style({
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    background: 'linear-gradient(-45deg,rgba(63,174,251,0.8211659663865546) 17%, rgba(24,65,94,1) 67%, rgba(0,0,0,0) 90%)',
    backgroundSize: '400% 400%',
    animation: `${backgroundMove} 20s linear infinite`,

    '@media': {
        'screen and (max-width: 920px)': {
            minHeight: 'none',
        }
    }
});

export const HomeContent = style({
    width: '100%',
    position: 'relative',

    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'column',


    '@media': {
        'screen and (max-width: 920px)': {
            margin: '0 auto'
        },
        '(prefers-reduced-motion)': {
          transitionProperty: 'color'
        },
    }
});

export const SmallBend = style({
    position: 'relative',
    top: '80vh',
    right: '8px',
    transform: 'translate(0%, 60%)'
})

export const BigSquiggle = style({
    position: 'absolute',
    top: '70%', 
    left: '88%', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 0,
});


export const LogoSection = style({
    width: '45%',
    float: 'left',
    textAlign: 'right',
    paddingTop: '8em',

    '@media': {
        'screen and (max-width: 559px)': {
            float: 'none',
            margin: '0',
            marginLeft: '25px',
            paddingTop: '0em'
        },
        '(prefers-reduced-motion)': {
            transitionProperty: 'color',

        },
        'screen and (max-width: 920px) and (min-width: 560px)': {
            float: 'none',
            margin: '0 auto',
            paddingTop: '0em'
        },
    }
})

export const Logo = style({
    width: '350px',
    
})

export const FormSection = style({
    width: '45%',
    float: 'right',


    '@media': {
        'screen and (max-width: 771px)': {
            float: 'none',
            margin: '0',
            marginLeft: '25px'
        },
        '(prefers-reduced-motion)': {
            transitionProperty: 'color'
        },
        'screen and (max-width: 920px) and (min-width: 560px)': {
            float: 'none',
            margin: '0 auto'
        },
    }
})

export const loggedInSection = style({
    minHeight: '88vh',
    overflow: 'hidden',
    width: '968px',

    '@media': {
        'screen and (max-width: 771px)': {
            width: '70vw',
            margin: '0 auto'
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            width: '70vw',
            margin: '0 auto'
        }
    }
})

export const BannerContainer = style({
    textAlign: 'center',
    boxShadow: 'rgba(255, 255, 0255, 0.16) 0px 1px 4px',
    borderRadius: '10px',
    width: '50em',
    margin: '0 auto',
    padding: '3em',
    backgroundColor: `rgba(50, 50, 50, 0.2)`,
    color: `${vars.colors.complementary}`,
    marginTop: '3em',

    '@media': {
        'screen and (max-width: 771px)': {
            width: '60vw',
            height: '15em',
            margin: '3em',
            padding: '2em',
            fontSize: `${vars.fontSize["1x"]}`
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            width: '60vw',
            margin: '3em'
        }
    }

})


export const InfoBlocks = style({
    width: '968px',
    margin: '0 auto',
    marginTop: '5em',

    '@media': {
        'screen and (max-width: 771px)': {
            width: '250px',
            margin: 'auto'
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            width: '70vw',
            margin: 'auto'
        }

    }
})

export const InfoBlock = style({
    width: '50%',
    display: 'inline-block',


    '@media': {
        'screen and (max-width: 771px)': {
            margin: '0',
            width: '40vw',
       
        },

        'screen and (max-width: 1200px) and (min-width: 772px)': {
            width: '33vw',
            
        }
    }

})

export const InfoContent = style({
    ':hover': {
        border: `1px solid ${vars.colors.brand}`
    }
})

export const DataNumber = style({
    marginTop: '35px',
    fontSize: `${vars.fontSize["8x"]}`,
    fontWeight: `${vars.fontWeight.extraBold}`,
    textShadow: `0 0 10px ${vars.colors.brand}`,

    '@media': {
        'screen and (max-width: 771px)': {
            marginTop: 0,
            fontSize: `${vars.fontSize['6x']}`
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            fontSize: `${vars.fontSize['6x']}`
        }
    }
})

export const InfoText = style({
    fontSize: `${vars.fontSize["4x"]}`,
    fontWeight: `${vars.fontWeight.bolder}`,

    '@media': {
        'screen and (max-width: 771px)': {
            fontSize: `${vars.fontSize['3x']}`
        },
        'screen and (max-width: 1200px) and (min-width: 772px)': {
            fontSize: `${vars.fontSize['3x']}`
        }
    }
})