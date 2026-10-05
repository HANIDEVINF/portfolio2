import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kzjyetclbsljbjkarlpc.supabase.co'
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_dgzwe5XyZeP8SvXjsqDShQ_cB8D6M9M'

  if (!supabaseUrl || !supabaseAnonKey) {
    return null
  }

  return createBrowserClient(
    supabaseUrl,
    supabaseAnonKey,
  )
}
