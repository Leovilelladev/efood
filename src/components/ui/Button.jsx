import styled from 'styled-components'

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 24px;
  padding: 4px 6px;
  border: 0;
  border-radius: 0;
  background: ${({ $primary }) => $primary ? 'var(--salmon)' : 'var(--cream)'};
  color: ${({ $primary }) => $primary ? 'var(--cream)' : 'var(--salmon)'};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  text-align: center;
  &:hover { filter: brightness(.97); }
`
