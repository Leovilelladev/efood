import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face { font-family: Roboto; font-style: normal; font-weight: 100 900; font-display: swap; src: url('/fonts/roboto-variable.ttf') format('truetype'); }
  :root {
    --salmon: #e66767;
    --cream: #ffebd9;
    --paper: #fff8f2;
    font-family: Roboto, sans-serif;
    color: var(--salmon);
    background: var(--paper);
    font-synthesis: none;
    text-rendering: geometricPrecision;
  }
  * { box-sizing: border-box; }
  body { margin: 0; min-width: 280px; }
  button, input, select { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { cursor: pointer; }
  a { color: inherit; text-decoration: none; }
  img { display: block; }
  button:focus-visible, a:focus-visible, input:focus-visible { outline: 2px solid #4b4b4b; outline-offset: 3px; }
  button:disabled { cursor: not-allowed; opacity: .65; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
`

export const Page = styled.div`
  min-height: 100vh;
  overflow-x: clip;
  background: var(--paper);
`

export const Shell = styled.div`
  width: min(1024px, calc(100% - 32px));
  margin-inline: auto;
`
