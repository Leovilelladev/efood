import styled from 'styled-components'

const Message = styled.div`
  position: fixed; left: 50%; bottom: 28px; z-index: 30; transform: translateX(-50%); padding: 13px 18px; border-radius: 9px; background: #292323; color: #fff; box-shadow: 0 12px 30px rgba(0,0,0,.2); font-size: 13px; font-weight: 700;
`

export function Toast({ children }) { return <Message role="status">{children}</Message> }
