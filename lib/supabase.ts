import { createBrowserClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

/**
 * Client-side Supabase client for browser operations
 * Use this in client components and hooks
 */
export const createClient_browser = () =>
  createBrowserClient(supabaseUrl, supabaseAnonKey)

/**
 * Server-side Supabase client for API routes and server components
 * Use this in server-only code
 */
export function createServerClient() {
  return createClient(supabaseUrl, supabaseAnonKey)
}
