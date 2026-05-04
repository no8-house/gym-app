import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({
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
        <h1 className="text-3xl font-bold mb-10">新規アカウント登録</h1>
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
              onClick={handleSignUp}
              className="px-6 py-2 rounded-lg bg-red-500 text-white border border-red-500 hover:bg-white hover:text-red-500 transition-colors"
            >
              新規登録
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
