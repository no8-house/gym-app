import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddGymPage from './pages/AddGymPage'
import Header from './components/c-header'
import GymDetailPage from './pages/GymDetailPage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddGymPage />} />
        <Route path="/gyms/:id" element={<GymDetailPage />} />
      </Routes>
    </>
  )
}

export default App
