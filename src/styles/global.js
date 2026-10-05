import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&display=swap');
  :root { color: #292323; background: #fffaf7; font-family: 'Roboto', sans-serif; font-synthesis: none; text-rendering: optimizeLegibility; }
  * { box-sizing: border-box; }
  body { margin: 0; min-width: 320px; background: #fffaf7; }
  button, input, select { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { cursor: pointer; }
  a { color: inherit; text-decoration: none; }
`

export const Page = styled.div`min-height: 100vh; overflow-x: hidden;`
export const Shell = styled.div`
  width: min(1180px, calc(100% - 48px)); margin: 0 auto;
  @media (max-width: 680px) { width: min(100% - 32px, 520px); }
`
