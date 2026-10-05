import styled from 'styled-components'

const Heading = styled.div`
  display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 27px;
  h2 { margin: 0; font-size: clamp(28px, 3vw, 40px); letter-spacing: -1px; line-height: 1.08; }
  p { margin: 8px 0 0; color: #897b75; font-size: 14px; }
  a { color: #e94d4d; font-size: 13px; font-weight: 700; }
`

export function SectionHeading({ children }) { return <Heading>{children}</Heading> }
