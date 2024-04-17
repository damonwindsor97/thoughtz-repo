import { style, globalKeyframes } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

const backgroundMove = 'globalMove';

globalKeyframes(backgroundMove, {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
});

export const HomeBackground = style({
    minHeight: '90vh',
    overflow: 'hidden',
    position: 'relative',
    background: 'linear-gradient(-45deg,rgba(63,174,251,0.8211659663865546) 17%, rgba(24,65,94,1) 67%, rgba(0,0,0,0) 90%)',
    backgroundSize: '400% 400%',
    animation: `${backgroundMove} 20s linear infinite`
});

export const HomeContent = style({
    position: 'relative',
});

export const SmallBend = style({
    position: 'relative',
    top: '66.2vh',
    right: '8px',
    transform: 'translate(0%, 60%)'
})

export const BigSquiggle = style({
    position: 'absolute',
    top: '60%', 
    left: '83%', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 0,
});


export const LogoSection = style({
    width: '45%',
    float: 'left',
    textAlign: 'right',
    paddingTop: '8em'
})

export const Logo = style({
    width: '350px',
    
})

export const FormSection = style({
    width: '45%',
    float: 'right',

})

export const loggedInSection = style({
    minHeight: '85vh',
    overflow: 'hidden',
    position: 'relative',
    background: 'linear-gradient(43deg, rgba(0,0,0,0) 0%, rgba(5,28,43,0.5802696078431373) 49%, rgba(0,0,0,0) 90%)',
    backgroundSize: '400% 400%',
    animation: `${backgroundMove} 20s linear infinite`
})

export const BannerContainer = style({
    textAlign: 'center',
    boxShadow: 'rgba(255, 255, 0255, 0.16) 0px 1px 4px',
    borderRadius: '10px',
    width: '50em',
    margin: '0 auto',
    padding: '5em',
    backgroundColor: `rgba(50, 50, 50, 0.2)`,
    color: `${vars.colors.complementary}`,
    marginTop: '3em'

})


export const InfoBlocks = style({
    width: '968px',
    margin: '0 auto',
    marginTop: '5em',

})

export const InfoBlock = style({
    width: '50%',
    display: 'inline-block',

})

export const DataNumber = style({
    fontSize: `${vars.fontSize["8x"]}`,
    fontWeight: `${vars.fontWeight.extraBold}`,

})

export const InfoText = style({


})