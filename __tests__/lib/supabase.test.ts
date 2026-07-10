import { describe, it, expect, beforeEach, vi } from 'vitest'
import * as supabaseModule from '@/lib/supabase'

// Mock the @supabase/supabase-js module
vi.mock('@supabase/supabase-js', () => {
  return {
    createClient: vi.fn(() => ({
      auth: {
        getSession: vi.fn(),
        signInWithPassword: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        onAuthStateChange: vi.fn(),
      },
      from: vi.fn(() => ({
        select: vi.fn(),
      })),
    })),
    createBrowserClient: vi.fn(() => ({
      auth: {
        getSession: vi.fn(),
        signInWithPassword: vi.fn(),
        signUp: vi.fn(),
        signOut: vi.fn(),
        onAuthStateChange: vi.fn(),
      },
      from: vi.fn(() => ({
        select: vi.fn(),
      })),
    })),
  }
})

describe('Supabase Client', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('createClient_browser', () => {
    it('should create a browser client instance', () => {
      const client = supabaseModule.createClient_browser()
      expect(client).toBeDefined()
      expect(client).toHaveProperty('auth')
      expect(client).toHaveProperty('from')
    })

    it('should have auth methods available', () => {
      const client = supabaseModule.createClient_browser()
      expect(client.auth).toHaveProperty('getSession')
      expect(client.auth).toHaveProperty('signInWithPassword')
      expect(client.auth).toHaveProperty('signUp')
      expect(client.auth).toHaveProperty('signOut')
    })

    it('should have database methods available', () => {
      const client = supabaseModule.createClient_browser()
      expect(client).toHaveProperty('from')
      expect(typeof client.from).toBe('function')
    })
  })

  describe('createServerClient', () => {
    it('should create a server client instance', () => {
      const client = supabaseModule.createServerClient()
      expect(client).toBeDefined()
      expect(client).toHaveProperty('auth')
      expect(client).toHaveProperty('from')
    })

    it('should have auth methods available on server client', () => {
      const client = supabaseModule.createServerClient()
      expect(client.auth).toHaveProperty('getSession')
      expect(client.auth).toHaveProperty('signInWithPassword')
      expect(client.auth).toHaveProperty('signUp')
      expect(client.auth).toHaveProperty('signOut')
    })

    it('should be able to query database', () => {
      const client = supabaseModule.createServerClient()
      const table = client.from('test_table')
      expect(table).toBeDefined()
      expect(table).toHaveProperty('select')
    })
  })

  describe('environment variables', () => {
    it('should have SUPABASE_URL set', () => {
      expect(process.env.NEXT_PUBLIC_SUPABASE_URL).toBeDefined()
      expect(process.env.NEXT_PUBLIC_SUPABASE_URL).toBe('https://test.supabase.co')
    })

    it('should have SUPABASE_ANON_KEY set', () => {
      expect(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY).toBeDefined()
      expect(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY).toBe('test-anon-key')
    })

    it('should have SERVICE_ROLE_KEY set', () => {
      expect(process.env.SUPABASE_SERVICE_ROLE_KEY).toBeDefined()
      expect(process.env.SUPABASE_SERVICE_ROLE_KEY).toBe('test-service-role-key')
    })
  })
})
