import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const uploadImage = async (file: File): Promise<string> => {
  const fileName = `${crypto.randomUUID()}-${file.name}`
  const { error } = await supabase.storage
    .from('gym-images')
    .upload(fileName, file)

  if (error) throw error

  const { data } = supabase.storage
    .from('gym-images')
    .getPublicUrl(fileName)

  return data.publicUrl
}