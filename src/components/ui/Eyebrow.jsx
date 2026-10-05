import styled from 'styled-components'

const Label = styled.div`
  display: inline-flex; align-items: center; margin-bottom: 21px; color: ${({ light }) => light ? 'rgba(255,255,255,.82)' : '#e94d4d'};
  font-size: 13px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase;
`

export function Eyebrow({ children, light = false }) { return <Label light={light}>{children}</Label> }
