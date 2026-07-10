import { describe, it, expect } from 'vitest'
import { GET } from '@/app/api/health/route'

describe('Health Check API Route', () => {
  it('should return 200 status', async () => {
    const response = await GET()
    expect(response.status).toBe(200)
  })

  it('should return JSON response', async () => {
    const response = await GET()
    expect(response.headers.get('content-type')).toContain('application/json')
  })

  it('should return ok status in body', async () => {
    const response = await GET()
    const json = await response.json()
    expect(json).toHaveProperty('status')
    expect(json.status).toBe('ok')
  })

  it('should include timestamp in response', async () => {
    const response = await GET()
    const json = await response.json()
    expect(json).toHaveProperty('timestamp')
    expect(typeof json.timestamp).toBe('string')
  })

  it('should return valid ISO timestamp', async () => {
    const response = await GET()
    const json = await response.json()
    const timestamp = new Date(json.timestamp)
    expect(timestamp).toBeInstanceOf(Date)
    expect(timestamp.getTime()).not.toBeNaN()
  })

  it('should return timestamp close to current time', async () => {
    const beforeTime = new Date()
    const response = await GET()
    const json = await response.json()
    const afterTime = new Date()
    const responseTime = new Date(json.timestamp)

    expect(responseTime.getTime()).toBeGreaterThanOrEqual(beforeTime.getTime() - 1000)
    expect(responseTime.getTime()).toBeLessThanOrEqual(afterTime.getTime() + 1000)
  })
})
