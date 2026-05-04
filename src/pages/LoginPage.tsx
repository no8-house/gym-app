import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      alert(error.message)
    } else {
      setEmail('')
      setPassword('')
      navigate('/')
    }
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="pt-32 px-10 max-w-3xl mx-auto pb-20">
        <h1 className="text-3xl font-bold mb-10">ログイン</h1>
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <div className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder=""
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                パスワード <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder=""
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-red-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              onClick={() => handleLogin()}
              className="px-6 py-2 rounded-lg bg-red-500 text-white border border-red-500 hover:bg-white hover:text-red-500 transition-colors">
              ログイン
            </button>
            <Link
              className="px-6 py-2 rounded-lg text-center block bg-white text-red-500 border border-red-500 hover:bg-red-500 hover:text-white transition-colors"              
              to="/signup">
              新規アカウント登録はこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
