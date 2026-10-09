import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');

  :root {
    color: #fff;
    background: #fff8f0;
    font-family: 'Roboto', Arial, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; min-width: 320px; background: #fff8f0; }
  button, input { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { cursor: pointer; }
  a { color: inherit; text-decoration: none; }
  ::selection { background: #e86a6c; color: #fff; }
`

export const Page = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  background: #fff8f0;
`

export const Shell = styled.div`
  width: min(1024px, calc(100% - 48px));
  margin: 0 auto;

  @media (max-width: 640px) {
    width: min(100% - 32px, 520px);
  }
`
