import { useEffect, useState } from 'react'
import { fetchRestaurants } from '../data/restaurants'

export function useRestaurants() {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    fetchRestaurants()
      .then((data) => {
        if (active) setRestaurants(data)
      })
      .catch(() => {
        if (active) setError('Não conseguimos carregar os restaurantes agora.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })

    return () => { active = false }
  }, [])

  return { restaurants, loading, error }
}
