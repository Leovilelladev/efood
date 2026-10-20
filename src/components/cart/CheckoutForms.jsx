import styled from 'styled-components'
import { Button } from '../ui/Button'
import { money } from '../../data/restaurants'

export const PanelTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`

const Form = styled.form`
  display: grid;
  gap: 8px;
  label { display: grid; gap: 8px; font-size: 14px; font-weight: 700; line-height: 16px; }
  input { width: 100%; min-width: 0; height: 32px; padding: 8px; border: 0; border-radius: 0; color: #4b4b4b; background: var(--cream); font-size: 14px; font-weight: 700; line-height: 16px; }
  input::placeholder { color: #4b4b4b; opacity: 1; }
  .row { display: grid; grid-template-columns: 1fr 1fr; gap: 34px; }
  .card-row { grid-template-columns: minmax(0, 228px) minmax(0, 87px); gap: 29px; }
  .actions { display: grid; gap: 8px; margin-top: 16px; }
`

const ErrorMessage = styled.p`
  margin: 8px 0 0;
  color: var(--cream);
  font-size: 13px;
  line-height: 18px;
`

export function DeliveryForm({ value, onBack, onContinue }) {
  function submit(event) {
    event.preventDefault()
    onContinue(Object.fromEntries(new FormData(event.currentTarget)))
  }

  return <>
    <PanelTitle id="cart-title">Entrega</PanelTitle>
    <Form onSubmit={submit}>
      <label>Quem irá receber<input name="receiver" autoComplete="name" required defaultValue={value.receiver ?? 'João Paulo de Souza'} /></label>
      <label>Endereço<input name="address" autoComplete="address-line1" required defaultValue={value.address} /></label>
      <label>Cidade<input name="city" autoComplete="address-level2" required defaultValue={value.city} /></label>
      <div className="row">
        <label>CEP<input name="zip" autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}-?[0-9]{3}" title="Informe um CEP com 8 dígitos" required defaultValue={value.zip} /></label>
        <label>Número<input name="number" inputMode="numeric" required defaultValue={value.number} /></label>
      </div>
      <label>Complemento (opcional)<input name="complement" autoComplete="address-line2" defaultValue={value.complement} /></label>
      <div className="actions">
        <Button type="submit">Continuar com o pagamento</Button>
        <Button type="button" onClick={onBack}>Voltar para o carrinho</Button>
      </div>
    </Form>
  </>
}

export function PaymentForm({ total, value, onChange, onBack, onConfirm, error, submitting }) {
  function updateField(event) {
    onChange({ ...value, [event.target.name]: event.target.value })
  }

  function submit(event) {
    event.preventDefault()
    onConfirm(value)
  }

  return <>
    <PanelTitle id="cart-title">Pagamento - Valor a pagar {money(total)}</PanelTitle>
    <Form onSubmit={submit} autoComplete="off">
      <label>Nome no cartão<input name="cardName" required value={value.cardName ?? ''} onChange={updateField} /></label>
      <div className="row card-row">
        <label>Número do cartão<input name="cardNumber" inputMode="numeric" pattern="(?:[0-9] ?){12,18}[0-9]" maxLength={23} required title="Informe entre 13 e 19 dígitos" value={value.cardNumber ?? ''} onChange={updateField} /></label>
        <label>CVV<input name="cvv" type="password" inputMode="numeric" pattern="[0-9]{3,4}" maxLength={4} required value={value.cvv ?? ''} onChange={updateField} /></label>
      </div>
      <div className="row">
        <label>Mês de vencimento<input name="month" inputMode="numeric" pattern="0?[1-9]|1[0-2]" maxLength={2} required title="Informe um mês de 1 a 12" value={value.month ?? ''} onChange={updateField} /></label>
        <label>Ano de vencimento<input name="year" inputMode="numeric" pattern="[0-9]{4}" maxLength={4} required title="Informe o ano com quatro dígitos" value={value.year ?? ''} onChange={updateField} /></label>
      </div>
      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
      <div className="actions">
        <Button type="submit" disabled={submitting}>{submitting ? 'Enviando pedido...' : 'Finalizar pagamento'}</Button>
        <Button type="button" onClick={onBack}>Voltar para a edição de endereço</Button>
      </div>
    </Form>
  </>
}

const Message = styled.div`
  p { margin: 0 0 24px; font-size: 14px; line-height: 22px; }
  button { width: 100%; }
`

export function OrderConfirmation({ orderId, onFinish }) {
  return <>
    <PanelTitle id="cart-title">Pedido realizado - {orderId}</PanelTitle>
    <Message>
      <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido. Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição. Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
      <Button type="button" onClick={onFinish}>Concluir</Button>
    </Message>
  </>
}
