import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCart } from '../context/CartContext'
import { Page, Shell } from '../styles/global'
import { SiteHeader } from '../components/layout/SiteHeader'
import { OrderSummary } from '../components/cart/OrderSummary'
import { Eyebrow } from '../components/ui/Eyebrow'

const CheckoutLayout = styled.main`
  padding: 64px 0 100px;
  .grid { display: grid; grid-template-columns: minmax(0, 1fr) 330px; gap: 65px; align-items: start; }
  h1 { margin: 0 0 8px; font-size: clamp(36px, 5vw, 56px); letter-spacing: -1.5px; }
  .intro { margin: 0 0 32px; color: #8b7d76; font-size: 14px; }
  @media (max-width: 850px) { .grid { grid-template-columns: 1fr; gap: 32px; } }
`
const Form = styled.form`
  display: grid; gap: 16px; max-width: 620px;
  .row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  label { display: grid; gap: 8px; color: #5f514c; font-size: 12px; font-weight: 700; }
  input, select { width: 100%; padding: 13px 14px; border: 1px solid #e8dcd6; border-radius: 8px; outline: 0; background: #fff; color: #292323; font-size: 13px; }
  input:focus, select:focus { border-color: #e94d4d; box-shadow: 0 0 0 3px rgba(233, 77, 77, .11); }
  button { width: fit-content; margin-top: 8px; padding: 14px 22px; border: 0; border-radius: 8px; background: #e94d4d; color: white; font-weight: 700; }
  @media (max-width: 560px) { .row { grid-template-columns: 1fr; } }
`
const SuccessCard = styled.div`
  max-width: 640px; margin: 30px auto 70px; padding: 64px 28px; border: 1px solid #ecdfda; border-radius: 18px; background: #fff; text-align: center;
  .mark { display: grid; place-items: center; width: 60px; height: 60px; margin: 0 auto 24px; border-radius: 50%; background: #2e9b6f; color: #fff; font-size: 28px; }
  .eyebrow { justify-content: center; }
  h1 { font-size: 43px !important; }
  p { max-width: 430px; margin: 0 auto 26px; color: #897b75; font-size: 14px; line-height: 1.6; }
  .back-home { display: inline-block; color: #e94d4d; font-size: 13px; font-weight: 700; }
`

export function CheckoutPage() {
  const { items, clearCart } = useCart()
  const [confirmed, setConfirmed] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    if (items.length) { clearCart(); setConfirmed(true) }
  }

  return <Page><SiteHeader /><CheckoutLayout><Shell>{confirmed ? <SuccessCard><span className="mark">✓</span><Eyebrow>Pedido confirmado</Eyebrow><h1>Já estamos preparando tudo.</h1><p>Seu pedido foi recebido pela cozinha. Em poucos minutos ele estará a caminho.</p><Link to="/" className="back-home">Voltar para o início</Link></SuccessCard> : <div className="grid"><div><Eyebrow>Quase lá</Eyebrow><h1>Finalize seu pedido.</h1><p className="intro">Preencha seus dados para receber sua comida.</p><Form onSubmit={handleSubmit}><div className="row"><label>Nome completo<input required placeholder="Como podemos chamar você?" /></label><label>Telefone<input required placeholder="(00) 00000-0000" /></label></div><label>Endereço de entrega<input required placeholder="Rua, número e complemento" /></label><div className="row"><label>Bairro<input required placeholder="Seu bairro" /></label><label>Forma de pagamento<select defaultValue="pix"><option value="pix">Pix</option><option value="card">Cartão na entrega</option><option value="cash">Dinheiro</option></select></label></div><button type="submit">Confirmar pedido</button></Form></div><OrderSummary compact /></div>}</Shell></CheckoutLayout></Page>
}
