import { describe, it, expect } from 'vitest'
import { useCounter } from '../composables/useCounter'

describe('useCounter', () => {
  it('initial count is 0', () => {
    const { count } = useCounter()
    expect(count.value).toBe(0)
  })

  it('increments the count', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })
})
