import { isUserOldEnough } from '../services/cnh';

test('Should return false to people with 18 years old', () => {
  expect(isUserOldEnough(17)).toBe(false)
})
