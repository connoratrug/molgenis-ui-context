import EventUtilService from '../../../src/service/EventUtilService'

describe('EventUtilService', () => {
  describe('debounce', () => {
    it('should should wait n milliseconds before calling the given function again', () => {
      let callCount = 0
      const myFunc = () => {
        callCount = callCount + 1
      }
      const debounced = EventUtilService.debounce(myFunc, 10)
      debounced()
      debounced()
      debounced()
      debounced()
      debounced()
      debounced()

      expect(callCount).toBe(1)
    })
  })
})
