import { createContext, useState, useContext } from 'react'
import gymsData from '../data/gymsData'
import type { Gym } from '../types'

type GymContextType = {
  gyms: Gym[]
  toggleFavorite: (id: string) => void
  deleteGym: (id: string) => void
  addGym: (gym: Gym) => void
}

const GymContext = createContext<GymContextType | null>(null)

export const GymProvider = ({ children }: { children: React.ReactNode }) => {
  const [gyms, setGyms] = useState<Gym[]>(gymsData)

  const toggleFavorite = (id: string) => {
    setGyms(
      gyms.map((gym) => {
        if (gym.id === id) {
          return {
            ...gym,
            isFavorite: !gym.isFavorite,
          }
        } else {
          return gym
        }
      }),
    )
  }

  const deleteGym = (id: string) => {
    setGyms(gyms.filter((gym) => gym.id !== id))
  }

  const addGym = (gym: Gym) => {
    setGyms([...gyms, gym])
  }

  return (
    <GymContext.Provider value={{ gyms, toggleFavorite, deleteGym, addGym }}>
      {children}
    </GymContext.Provider>
  )
}

export const useGym = () => {
  const context = useContext(GymContext)
  if (!context) {
    throw new Error('useGym must be used within a GymProvider')
  }
  return context
}

export type { GymContextType }
