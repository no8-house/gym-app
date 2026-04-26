import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <nav className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">
        <Link to="/">
          <img className="h-10" src="/img/logo.png" alt="logo" />
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
          <li>
            <Link
              className="text-sm hover:opacity-70 transition-opacity"
              to="/add"
            >
              ジム追加
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
