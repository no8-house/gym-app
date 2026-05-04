import { createContext, useState, useContext, useEffect } from 'react'
import type { Gym } from '../types'
import { supabase } from '../lib/supabase'
import type {User} from "@supabase/supabase-js"

type GymContextType = {
  user: User | null
  gyms: Gym[]
  toggleFavorite: (id: string) => void
  deleteGym: (id: string) => Promise<void>
  addGym: (gym: Gym) => Promise<void>
  editGym: (gym: Gym) => Promise<void>
}

const GymContext = createContext<GymContextType | null>(null)

export const GymProvider = ({ children }: { children: React.ReactNode }) => {
  const [gyms, setGyms] = useState<Gym[]>([])
  const [user, setUser ] = useState<User | null>(null);

useEffect(() => {
  supabase.auth.getSession().then(({ data: { session } }) => {
    setUser(session?.user ?? null)
  })

  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    setUser(session?.user ?? null)
  })

  return () => subscription.unsubscribe()
}, [])


useEffect(() => {
  const fetchGyms = async () => {
    const { data, error } = await supabase
      .from('gyms')
      .select('*')
    if (error) {
      console.error(error)
      return
    }

    if (data) {
      const gyms = data.map((item) => ({
        id: item.id,
        name: item.name,
        address: item.address,
        thumbnail: item.thumbnail,
        photos: item.photos ?? [],
        description: item.description ?? '',
        equipment: item.equipment ?? { machines: [] },
        facilities: item.facilities ?? {},
        basicInfo: item.basic_info ?? {},
        isFavorite: item.is_favorite ?? false,
        userId: item.user_id ?? null,
      }))
      setGyms(gyms)
    }
  }
  fetchGyms()
}, [])

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

  const deleteGym = async (id: string) => {
    const {error} = await supabase.from("gyms").delete().eq("id", id)
    if(error) {
      console.error(error)
      return
    }
    setGyms(gyms.filter((gym) => gym.id !== id))
  }

  const addGym = async (gym: Gym) => {
    const { error } = await supabase.from('gyms').insert({
      name: gym.name,
      address: gym.address,
      thumbnail: gym.thumbnail,
      photos: gym.photos,
      description: gym.description,
      equipment: gym.equipment,
      facilities: gym.facilities,
      basic_info: gym.basicInfo,
      is_favorite: gym.isFavorite,
      user_id: user?.id ?? null,
    })

    if (error) {
      console.error(error)
      return
    }

    setGyms([...gyms, gym])
  }

  const editGym = async (gym: Gym) => {
    const { error } = await supabase.from('gyms').update({
      name: gym.name,
      address: gym.address,
      thumbnail: gym.thumbnail,
      photos: gym.photos,
      description: gym.description,
      equipment: gym.equipment,
      facilities: gym.facilities,
      basic_info: gym.basicInfo,
      is_favorite: gym.isFavorite,
      user_id: user?.id ?? null,
    }).eq("id", gym.id)

    if (error) {
      console.error(error)
      return
    }

    setGyms(gyms.map((currentGym) =>
      currentGym.id === gym.id ? gym : currentGym
    ))
  }

  return (
    <GymContext.Provider value={{ gyms, toggleFavorite, deleteGym, addGym, editGym, user }}>
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
