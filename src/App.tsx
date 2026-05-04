import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AddGymPage from './pages/AddGymPage'
import Header from './components/c-header'
import GymDetailPage from './pages/GymDetailPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import EditGymPage from './pages/EditGymPage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/add" element={<AddGymPage />} />
        <Route path="/gyms/:id" element={<GymDetailPage />} />
        <Route path="/gyms/:id/edit" element={<EditGymPage />} />
      </Routes>
    </>
  )
}

export default App
