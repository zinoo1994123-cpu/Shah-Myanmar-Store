import { describe, it, expect } from 'vitest'
import {
  cn,
  formatPrice,
  formatDate,
  generateSlug,
  truncate,
} from '@/lib/utils'

describe('Utility Functions', () => {
  describe('cn', () => {
    it('should merge Tailwind classes', () => {
      const result = cn('px-2 py-1', 'px-4')
      expect(result).toContain('px-4')
      expect(result).toContain('py-1')
    })

    it('should handle conditional classes', () => {
      const result = cn('text-black', true && 'bg-white', false && 'text-white')
      expect(result).toContain('text-black')
      expect(result).toContain('bg-white')
      expect(result).not.toContain('text-white')
    })
  })

  describe('formatPrice', () => {
    it('should format price as Malaysian Ringgit', () => {
      const price = 100
      const formatted = formatPrice(price)
      expect(formatted).toContain('RM')
    })

    it('should include decimal places', () => {
      const price = 99.99
      const formatted = formatPrice(price)
      expect(formatted).toContain('99.99')
    })

    it('should handle zero', () => {
      const price = 0
      const formatted = formatPrice(price)
      expect(formatted).toContain('0')
    })

    it('should handle large numbers', () => {
      const price = 9999.99
      const formatted = formatPrice(price)
      expect(formatted).toContain('9999.99')
    })
  })

  describe('formatDate', () => {
    it('should format date in Malaysian locale', () => {
      const date = '2024-01-15'
      const formatted = formatDate(date)
      expect(formatted).toBeDefined()
      expect(formatted.length).toBeGreaterThan(0)
    })

    it('should accept Date object', () => {
      const date = new Date('2024-01-15')
      const formatted = formatDate(date)
      expect(formatted).toBeDefined()
    })

    it('should include month name', () => {
      const date = '2024-01-15'
      const formatted = formatDate(date)
      expect(formatted.toLowerCase()).toContain('january')
    })
  })

  describe('generateSlug', () => {
    it('should convert to lowercase', () => {
      const slug = generateSlug('Hello World')
      expect(slug).toBe('hello-world')
    })

    it('should replace spaces with hyphens', () => {
      const slug = generateSlug('My Product Name')
      expect(slug).toBe('my-product-name')
    })

    it('should remove special characters', () => {
      const slug = generateSlug('Product! @#$%')
      expect(slug).toBe('product')
    })

    it('should handle multiple hyphens', () => {
      const slug = generateSlug('Hello   World')
      expect(slug).toBe('hello-world')
    })
  })

  describe('truncate', () => {
    it('should truncate long text', () => {
      const text = 'This is a very long text that needs truncating'
      const truncated = truncate(text, 10)
      expect(truncated).toBe('This is a ...')
      expect(truncated.length).toBeLessThanOrEqual(13)
    })

    it('should not truncate short text', () => {
      const text = 'Short'
      const truncated = truncate(text, 10)
      expect(truncated).toBe('Short')
    })

    it('should handle exact length', () => {
      const text = 'Exact'
      const truncated = truncate(text, 5)
      expect(truncated).toBe('Exact')
    })

    it('should add ellipsis only when truncated', () => {
      const text = 'Hello'
      const truncated = truncate(text, 10)
      expect(truncated).not.toContain('...')
    })
  })
})
