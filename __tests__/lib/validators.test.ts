import { describe, it, expect } from 'vitest'
import {
  loginSchema,
  registerSchema,
  checkoutSchema,
  type LoginInput,
  type RegisterInput,
  type CheckoutInput,
} from '@/lib/validators'

describe('Zod Validators', () => {
  describe('loginSchema', () => {
    it('should validate correct login data', () => {
      const validData = {
        email: 'test@example.com',
        password: 'password123',
      }
      const result = loginSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid email', () => {
      const invalidData = {
        email: 'not-an-email',
        password: 'password123',
      }
      const result = loginSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject password shorter than 6 characters', () => {
      const invalidData = {
        email: 'test@example.com',
        password: 'pass',
      }
      const result = loginSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject missing email', () => {
      const invalidData = {
        password: 'password123',
      }
      const result = loginSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('registerSchema', () => {
    it('should validate correct registration data', () => {
      const validData = {
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
        firstName: 'John',
        lastName: 'Doe',
      }
      const result = registerSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject mismatched passwords', () => {
      const invalidData = {
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password456',
        firstName: 'John',
        lastName: 'Doe',
      }
      const result = registerSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject missing first name', () => {
      const invalidData = {
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
        lastName: 'Doe',
      }
      const result = registerSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject empty names', () => {
      const invalidData = {
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
        firstName: '',
        lastName: 'Doe',
      }
      const result = registerSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe('checkoutSchema', () => {
    it('should validate correct checkout data', () => {
      const validData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '0123456789',
        address: '123 Main Street',
        city: 'Kuala Lumpur',
        state: 'Selangor',
        postalCode: '50000',
        country: 'Malaysia',
      }
      const result = checkoutSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('should reject invalid phone number', () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '123',
        address: '123 Main Street',
        city: 'Kuala Lumpur',
        state: 'Selangor',
        postalCode: '50000',
        country: 'Malaysia',
      }
      const result = checkoutSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject short address', () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '0123456789',
        address: '123',
        city: 'Kuala Lumpur',
        state: 'Selangor',
        postalCode: '50000',
        country: 'Malaysia',
      }
      const result = checkoutSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it('should reject invalid email', () => {
      const invalidData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'not-an-email',
        phone: '0123456789',
        address: '123 Main Street',
        city: 'Kuala Lumpur',
        state: 'Selangor',
        postalCode: '50000',
        country: 'Malaysia',
      }
      const result = checkoutSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })
})
