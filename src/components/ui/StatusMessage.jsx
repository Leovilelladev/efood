import styled from 'styled-components'

const Message = styled.div`
  padding: 48px 24px;
  border: 1px dashed #e6d8d0;
  border-radius: 16px;
  color: #897b75;
  text-align: center;
`

export function StatusMessage({ children }) {
  return <Message role="status">{children}</Message>
}
