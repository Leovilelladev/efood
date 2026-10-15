import { useEffect, useState } from 'react'
import { fetchRestaurants, getCachedRestaurants } from '../data/restaurants'

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState(() => getCachedRestaurants() || [])
  const [loading, setLoading] = useState(() => !getCachedRestaurants())
  const [error, setError] = useState('')
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    let active = true
    const cachedRestaurants = getCachedRestaurants()

    if (cachedRestaurants !== null) {
      setRestaurants(cachedRestaurants)
      setLoading(false)
      return () => { active = false }
    }

    setLoading(true)
    setError('')

    fetchRestaurants()
      .then((data) => {
        if (active) setRestaurants(data)
      })
      .catch(() => {
        if (active) setError('Não conseguimos carregar os restaurantes agora. Verifique sua conexão e tente novamente.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => { active = false }
  }, [attempt])

  return { restaurants, loading, error, reload: () => setAttempt((current) => current + 1) }
}
