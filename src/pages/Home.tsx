import GymCard from '../components/c-gymCard'
import { useGym } from '../contexts/GymContext'

const Home = () => {
  const { gyms, toggleFavorite } = useGym()

  return (
    <div className="bg-gray-100">
      <div className="pt-32 min-h-screen px-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold  mb-8">ジム一覧</h1>
        <ul className="grid grid-cols-3 gap-8">
          {gyms.map((gym) => (
            <li key={gym.id}>
              <GymCard gym={gym} onToggleFavorite={toggleFavorite} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
