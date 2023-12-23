<template>
    <ColorScheme placeholder="...">
        <NavigationHeader />
        <main>
            <NuxtPage />
        </main>
    </ColorScheme>
</template>

<style lang="less">
    // https://color-mode.nuxtjs.org/
    :root {
        --background-colour: rgb(245, 245, 245);
        --background-colour-inverted: rgb(34, 34, 34);

        --card-background-colour: rgb(255, 255, 255);
        --card-background-colour-inverted: rgb(24, 24, 24);

        --text-colour: rgb(8, 11, 25);
        --text-colour-inverted: rgb(255, 255, 255);

        --accent-colour: rgb(255, 169, 38);

        --border-colour: rgb(230, 230, 230);
        --border-colour-inverted: rgb(51, 51, 53);

        --box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
            hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
        --error-colour: rgb(255, 0, 0);
        --error-background-colour: rgba(255, 17, 17, 0.067);

        --border-radius: 1rem;

        --page-width: 100rem;

        --navigation-height-large: 5rem;
        --navigation-height-small: 3rem;
    }

    html[data-theme='dark'] {
        --background-colour: rgb(34, 34, 34);
        --background-colour-inverted: rgb(245, 245, 245);

        --card-background-colour: rgb(24, 24, 24);
        --card-background-colour-inverted: rgb(255, 255, 255);

        --text-colour: rgb(255, 255, 255);
        --text-colour-inverted: rgb(8, 11, 25);

        --border-colour: rgb(51, 51, 53);
        --border-colour-inverted: rgb(230, 230, 230);
    }

    a,
    abbr,
    acronym,
    address,
    applet,
    article,
    aside,
    audio,
    bdi,
    bdo,
    blockquote,
    body,
    br,
    button,
    canvas,
    caption,
    cite,
    code,
    col,
    colgroup,
    data,
    datalist,
    dd,
    del,
    details,
    dfn,
    dialog,
    div,
    dl,
    dt,
    em,
    embed,
    fieldset,
    figcaption,
    figure,
    footer,
    form,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    header,
    hgroup,
    hr,
    html,
    i,
    iframe,
    img,
    input,
    ins,
    kbd,
    label,
    legend,
    li,
    main,
    map,
    mark,
    menu,
    meter,
    nav,
    object,
    ol,
    optgroup,
    option,
    output,
    p,
    pre,
    progress,
    q,
    rp,
    rt,
    ruby,
    s,
    samp,
    search,
    section,
    select,
    small,
    source,
    span,
    strong,
    sub,
    summary,
    sup,
    table,
    tbody,
    td,
    textarea,
    tfoot,
    th,
    thead,
    time,
    tr,
    track,
    u,
    ul,
    var,
    video,
    wbr {
        all: unset;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-weight: 400;
        vertical-align: baseline;
        background: transparent;
        box-sizing: border-box;
        color: inherit;
        text-decoration: none;
        text-align: inherit;
        text-transform: inherit;
        text-rendering: inherit;
        line-height: inherit;
        font-family: inherit;
        -webkit-font-smoothing: inherit;
        -moz-osx-font-smoothing: inherit;
        transition: color 0.2s, background-color 0.2s;

        &:focus,
        &:focus-visible {
            outline: 1px solid var(--accent-colour);
        }

        &:focus:not(:focus-visible) {
            outline: none;
        }
    }

    img,
    button,
    textarea,
    input,
    select {
        display: inline-block;
        max-width: 100%;
    }

    p,
    div,
    section,
    main,
    footer,
    nav,
    header {
        display: block;
    }

    html {
        background-color: var(--background-colour);
        color: var(--text-colour);

        font-size: 1rem;
        overflow-x: clip;
        min-height: 100vh;
        scroll-padding-top: var(--navigation-height-large);

        font-family: 'Shin Go Pr5', Inter, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    pre {
        padding: 1rem;
        border: 1px solid var(--border-colour);
        border-radius: 0.5rem;
    }

    main {
        margin: var(--navigation-height-large) auto 0;
        max-width: var(--page-width);

        @media screen and (max-width: 102rem) {
            padding: 0 1rem;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    h1 {
        font-weight: 800;
    }

    h2 {
        font-weight: 700;
    }

    h3 {
        font-weight: 600;
    }

    svg.inline-svg {
        height: 2ch;
        width: 2ch;
        margin-bottom: -1px;
    }

    a {
        color: var(--accent-colour);
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: var(--accent-colour);
            transition: color 0.3s;
        }
    }

    a,
    a:visited {
        text-decoration: none;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/subsets/B-latin.woff2') format('woff2');
        unicode-range: U+0000-00FF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/subsets/B-latin-ext.woff2') format('woff2');
        unicode-range: U+0100-017F, U+0180-024F, U+1E00-1EFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/subsets/B-rest.woff2') format('woff2');
        unicode-range: U+0250-1DFF, U+1F00-2C5F, U+D800-F8FF, U+FB00-FE2F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/subsets/B-cjk-a.woff2') format('woff2');
        unicode-range: U+2E80-33FF, U+3400-4DFF, U+4E00-5FFF, U+F900-FAFF,
            U+FF00-FFEF, U+20000-2FA1F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/subsets/B-cjk-b.woff2') format('woff2');
        unicode-range: U+6000-7FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('/fonts/subsets/B-cjk-c.woff2') format('woff2');
        unicode-range: U+8000-9FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/subsets/DB-latin.woff2') format('woff2');
        unicode-range: U+0000-00FF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/subsets/DB-latin-ext.woff2') format('woff2');
        unicode-range: U+0100-017F, U+0180-024F, U+1E00-1EFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/subsets/DB-rest.woff2') format('woff2');
        unicode-range: U+0250-1DFF, U+1F00-2C5F, U+D800-F8FF, U+FB00-FE2F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/subsets/DB-cjk-a.woff2') format('woff2');
        unicode-range: U+2E80-33FF, U+3400-4DFF, U+4E00-5FFF, U+F900-FAFF,
            U+FF00-FFEF, U+20000-2FA1F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/subsets/DB-cjk-b.woff2') format('woff2');
        unicode-range: U+6000-7FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: url('/fonts/subsets/DB-cjk-c.woff2') format('woff2');
        unicode-range: U+8000-9FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/subsets/H-latin.woff2') format('woff2');
        unicode-range: U+0000-00FF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/subsets/H-latin-ext.woff2') format('woff2');
        unicode-range: U+0100-017F, U+0180-024F, U+1E00-1EFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/subsets/H-rest.woff2') format('woff2');
        unicode-range: U+0250-1DFF, U+1F00-2C5F, U+D800-F8FF, U+FB00-FE2F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/subsets/H-cjk-a.woff2') format('woff2');
        unicode-range: U+2E80-33FF, U+3400-4DFF, U+4E00-5FFF, U+F900-FAFF,
            U+FF00-FFEF, U+20000-2FA1F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/subsets/H-cjk-b.woff2') format('woff2');
        unicode-range: U+6000-7FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 800;
        font-display: swap;
        src: url('/fonts/subsets/H-cjk-c.woff2') format('woff2');
        unicode-range: U+8000-9FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/subsets/L-latin.woff2') format('woff2');
        unicode-range: U+0000-00FF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/subsets/L-latin-ext.woff2') format('woff2');
        unicode-range: U+0100-017F, U+0180-024F, U+1E00-1EFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/subsets/L-rest.woff2') format('woff2');
        unicode-range: U+0250-1DFF, U+1F00-2C5F, U+D800-F8FF, U+FB00-FE2F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/subsets/L-cjk-a.woff2') format('woff2');
        unicode-range: U+2E80-33FF, U+3400-4DFF, U+4E00-5FFF, U+F900-FAFF,
            U+FF00-FFEF, U+20000-2FA1F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/subsets/L-cjk-b.woff2') format('woff2');
        unicode-range: U+6000-7FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: url('/fonts/subsets/L-cjk-c.woff2') format('woff2');
        unicode-range: U+8000-9FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/subsets/M-latin.woff2') format('woff2');
        unicode-range: U+0000-00FF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/subsets/M-latin-ext.woff2') format('woff2');
        unicode-range: U+0100-017F, U+0180-024F, U+1E00-1EFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/subsets/M-rest.woff2') format('woff2');
        unicode-range: U+0250-1DFF, U+1F00-2C5F, U+D800-F8FF, U+FB00-FE2F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/subsets/M-cjk-a.woff2') format('woff2');
        unicode-range: U+2E80-33FF, U+3400-4DFF, U+4E00-5FFF, U+F900-FAFF,
            U+FF00-FFEF, U+20000-2FA1F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/subsets/M-cjk-b.woff2') format('woff2');
        unicode-range: U+6000-7FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: url('/fonts/subsets/M-cjk-c.woff2') format('woff2');
        unicode-range: U+8000-9FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/subsets/R-latin.woff2') format('woff2');
        unicode-range: U+0000-00FF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/subsets/R-latin-ext.woff2') format('woff2');
        unicode-range: U+0100-017F, U+0180-024F, U+1E00-1EFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/subsets/R-rest.woff2') format('woff2');
        unicode-range: U+0250-1DFF, U+1F00-2C5F, U+D800-F8FF, U+FB00-FE2F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/subsets/R-cjk-a.woff2') format('woff2');
        unicode-range: U+2E80-33FF, U+3400-4DFF, U+4E00-5FFF, U+F900-FAFF,
            U+FF00-FFEF, U+20000-2FA1F;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/subsets/R-cjk-b.woff2') format('woff2');
        unicode-range: U+6000-7FFF;
    }

    @font-face {
        font-family: 'Shin Go Pr5';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/fonts/subsets/R-cjk-c.woff2') format('woff2');
        unicode-range: U+8000-9FFF;
    }
</style>
