import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const HomeBackground = style({
    backgroundColor: `${vars.colors.brandLight}`,
    minHeight: '81.2vh',
    overflow: 'hidden',
    position: 'relative',
    zIndex: 0, 
});

export const HomeContent = style({
    position: 'relative',
});

export const SmallBend = style({
    position: 'relative',
    top: '66.2vh',
    right: '8px',
    transform: 'translate(0%, 10%)'
})

export const BigSquiggle = style({
    position: 'absolute',
    top: '60%', 
    left: '83%', 
    transform: 'translate(-50%, -50%)', 
    zIndex: -1,
});


export const LogoSection = style({
    width: '45%',
    float: 'left',
    textAlign: 'right',
    paddingTop: '8em'
})

export const Logo = style({
    width: '350px'
})

export const FormSection = style({
    width: '45%',
    float: 'right',

})
