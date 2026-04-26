import type { Gym } from '../types'
import { Link } from 'react-router-dom'

type Props = {
  gym: Gym
  onToggleFavorite: (id: string) => void
}

function GymCard({ gym, onToggleFavorite }: Props) {
  return (
    <Link
      className="relative block mb-4 rounded-lg shadow-md bg-white overflow-hidden transition-opacity duration-300 ease-in-out hover:opacity-90"
      to={`/gyms/${gym.id}`}
      aria-label={`${gym.name}の詳細を見る`}
    >
      <button
        className="absolute top-2 right-4 z-20 w-8 h-8 flex items-center justify-center text-lg drop-shadow-lg transition-transform duration-200 hover:scale-110"
        onClick={(e) => {
          e.preventDefault()
          onToggleFavorite(gym.id)
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={gym.isFavorite ? 'gold' : 'rgba(92, 97, 108, 0.4)'}
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="w-full h-[180px]">
        <img
          className="w-full h-full object-cover"
          src={gym.thumbnail}
          alt=""
        />
      </div>
      <div className="p-5">
        <p className="text-lg font-bold mb-2">{gym.name}</p>
        <p className="text-sm text-gray-500">📍{gym.address}</p>
        {/* <button onClick={() => onDeleteGym(gym.id)}>削除</button> */}
        <span className="inline-block mt-5 text-right w-full">詳しく見る</span>
      </div>
    </Link>
  )
}

export default GymCard
