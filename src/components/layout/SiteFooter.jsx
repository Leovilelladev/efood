import styled from 'styled-components'
import { Brand } from './Brand'

const Footer = styled.footer`
  position: relative;
  left: ${({ $profile }) => $profile ? '-1px' : '0'};
  height: 298px;
  padding-top: 40px;
  background: var(--cream);
  text-align: center;
  .brand { display: flex; justify-content: center; transform: translateX(.5px); }
  .socials { display: flex; justify-content: center; gap: 8px; margin-top: 32.5px; }
  p { width: min(480px, calc(100% - 32px)); margin: 80px auto 0; transform: translateX(1px); font-size: 10px; line-height: 12px; }
`

export function SiteFooter({ profile = false }) {
  return <Footer $profile={profile}>
    <div className="brand"><Brand /></div>
    <div className="socials" aria-label="Redes sociais">
      <img src="/figma/instagram.svg" alt="Instagram" />
      <img src="/figma/facebook.svg" alt="Facebook" />
      <img src="/figma/twitter.svg" alt="Twitter" />
    </div>
    <p>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado.</p>
  </Footer>
}
