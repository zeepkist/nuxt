<template>
  <ColorScheme>
    <NavigationHeader />
    <NuxtPage />
  </ColorScheme>
</template>

<style lang="less">
// https://color-mode.nuxtjs.org/
:root {
  --background-colour: #fff;
  --text-colour: #000;
}

html.dark-mode {
  --background-colour: #000;
  --text-colour: #fff;
}

html {
  background-color: var(--background-colour);
  color: var(--text-colour);

  overflow-x: clip;
  min-height: 100vh;
  transition: color 0.5s, background-color 0.5s;

  font-family: 'Shin Go Pr5', Inter, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
    font-weight: 800;
    margin-top: 0;
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
