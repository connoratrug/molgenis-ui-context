import { setCookie, deleteCookie, findValueInList } from '../../../src/service/CookieService'

describe('CookieService', () => {
  describe('setCookie', () => {
    it('should set a cookie', () => {
      setCookie('test', 'true', 1)
      expect(document.cookie).toBe('test=true')
    })
  })
  describe('deleteCookie', () => {
    it('should remove a cookie', () => {
      expect(findValueInList(document.cookie, 'test')).toBe('true')
      deleteCookie('test')
      expect(findValueInList(document.cookie, 'test')).toBe(null)
    })
  })
  describe('findValueInList', () => {
    it('should extract value from semicolon separated list', () => {
      const listA:string = 'key1=value1;key2=value2; key3=value3'
      const listB:string = 'key4:value4;key5=value5;'

      expect(findValueInList(listA, 'key1')).toBe('value1')
      expect(findValueInList(listA, 'key2')).toBe('value2')
      expect(findValueInList(listA, 'key3')).toBe('value3')
      expect(findValueInList(listA, 'key4')).toBe(null)
      expect(findValueInList(listB, 'key4')).toBe(null)
      expect(findValueInList(listB, 'key5')).toBe('value5')
    })
  })
})
