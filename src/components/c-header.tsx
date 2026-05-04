import { Link } from 'react-router-dom'
import { useGym } from '../contexts/GymContext'
import { supabase } from '../lib/supabase';

const Header = () => {
const {user} = useGym();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <nav className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
        <Link to="/">
          <img className="h-12" src="/img/logo.png" alt="logo" />
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link
              className="text-sm hover:opacity-70 transition-opacity"
              to="/"
            >
              ジム一覧
            </Link>
          </li>

          { user ?
          <>
            <li>
              <Link
                className="text-sm hover:opacity-70 transition-opacity"
                to="/add"
              >
                ジム登録
              </Link>
            </li>
            <li>
              <button
                className="text-sm hover:opacity-70 transition-opacity"
                onClick={() => supabase.auth.signOut()}
              >
                ログアウト
              </button>
            </li>
          </> :
          <li>
            <Link
              className="text-sm hover:opacity-70 transition-opacity"
              to="/login"
            >
              ログイン
            </Link>
          </li>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Header
