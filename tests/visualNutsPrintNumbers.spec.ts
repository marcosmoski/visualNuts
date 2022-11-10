import { test, expect, vi } from 'vitest'
import { isDivisibleBy, visualNutsPrintNumbers } from '../vistualNutsPrintNumbers'

test('should return true if the number is divisible by the passed divisor', () => { 
  expect(isDivisibleBy(2,2)).toBe(true)
})

test('should return false if the number is not divisible by the passed divisor', () => { 
  expect(isDivisibleBy(2,3)).toBe(false)
})

test('should print on console "Visual" when is divisible for 3', () => {
  const spy = vi.spyOn(console, 'log');

  visualNutsPrintNumbers(3,4)
  expect(spy).toBeCalledTimes(1)
  expect(spy).toBeCalledWith("Visual")
})

test('should print on console "Nuts" when is divisible for 5', () => {
  const spy = vi.spyOn(console, 'log');

  visualNutsPrintNumbers(5,6)
  expect(spy).toBeCalledTimes(1)
  expect(spy).toBeCalledWith("Nuts")
})

test('should print on console "Visual Nuts" when is divisible for 3 and 5', () => {
  const spy = vi.spyOn(console, 'log');

  visualNutsPrintNumbers(15,16)
  expect(spy).toBeCalledTimes(1)
  expect(spy).toBeCalledWith("Visual Nuts")
})
