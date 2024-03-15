import { globalStyle } from '@vanilla-extract/css'


globalStyle("html:focus-within", {
    scrollBehavior: "smooth"
})

globalStyle("body, h1, h2, h3, h4, p, figure, blockquote, dl, dd", {
    margin: 0
})

globalStyle('body', {
    minHeight: "100vh",
    textRendering: "optimizeSpeed",
    lineHeight: 1.5,

  });

globalStyle('button, input, textarea, select', {
    font: 'inherit'
})