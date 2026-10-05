import styled from 'styled-components'
import { Shell } from '../../styles/global'

const Footer = styled.footer`
  padding: 34px 0 42px; border-top: 1px solid #eee3de; color: #897b75; font-size: 12px;
  .footer-inner { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  strong { color: #292323; font-size: 18px; letter-spacing: -1px; }
  @media (max-width: 600px) { .footer-inner { align-items: start; flex-direction: column; } }
`

export function SiteFooter() { return <Footer><Shell><div className="footer-inner"><strong>efood</strong><span>Seu pedido, do seu jeito.</span><span>© 2026 efood</span></div></Shell></Footer> }
