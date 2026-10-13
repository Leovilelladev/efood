import { useEffect, useRef } from 'react'

export function useDialog(onClose, focusKey) {
  const ref = useRef(null)
  const close = useRef(onClose)
  close.current = onClose

  useEffect(() => {
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    ref.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') close.current()
      if (event.key !== 'Tab') return
      const controls = [...(ref.current?.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), [tabindex="0"]') || [])]
        .filter((element) => element.getClientRects().length)
      const first = controls[0]
      const last = controls.at(-1)
      if (!first) { event.preventDefault(); return }
      const outside = !ref.current?.contains(document.activeElement)
      if (event.shiftKey && (document.activeElement === first || document.activeElement === ref.current || outside)) {
        event.preventDefault(); last.focus()
      } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === ref.current || outside)) {
        event.preventDefault(); first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      if (previousFocus?.isConnected) previousFocus.focus()
    }
  }, [])

  useEffect(() => { ref.current?.focus() }, [focusKey])

  return ref
}
