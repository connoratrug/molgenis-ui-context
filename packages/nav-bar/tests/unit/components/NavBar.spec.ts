import { shallowMount } from '@vue/test-utils'
import NavBar from '../../../src/components/NavBar.vue'
import molgenisMenu from '../../../src/exampleMenu'
jest.mock('@molgenis/molgenis-api-client')

describe('NavBar.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(NavBar, {
      propsData: { molgenisMenu }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('Hamburger is shown, screen is resized to a value larger then dynamicHamburgerBreakpoint', () => {
    it('should hide the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu }
      })

      // @ts-ignore
      wrapper.vm.showHamburger = true
      // @ts-ignore
      wrapper.vm.dynamicHamburgerBreakpoint = 10
      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(false)
    })
  })

  describe('Hamburger is shown, screen is resided to a value smaller then dynamicHamburgerBreakpoint', () => {
    it('should keep showing the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu },
        data: () => {
          return {
            selectedLanguage: 'en',
            languages: ['en'],
            helperStyle: undefined,
            expectedNavHeight: 45,
            showHamburger: false,
            dynamicHamburgerBreakpoint: 5000
          }
        }
      })

      // @ts-ignore
      wrapper.vm.showHamburger = true
      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(true)
    })
  })

  describe('Hamburger is not shown, actual nav height is bigger then the expected height', () => {
    it('should show the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu },
        data: () => {
          return {
            selectedLanguage: 'en',
            languages: ['en'],
            helperStyle: undefined,
            expectedNavHeight: 45,
            showHamburger: false,
            dynamicHamburgerBreakpoint: 5000
          }
        }
      })

      // @ts-ignore
      wrapper.vm.expectedNavHeight = -1 // calculated height is 0 so use -1 here to trigger if branch
      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(true)
    })
  })

  describe('Hamburger is not shown, actual nav height is not bigger then the expected height', () => {
    it('should keep not showing the hamburger', () => {
      const wrapper = shallowMount(NavBar, {
        propsData: { molgenisMenu },
        data: () => {
          return {
            selectedLanguage: 'en',
            languages: ['en'],
            helperStyle: undefined,
            expectedNavHeight: 0,
            showHamburger: false,
            dynamicHamburgerBreakpoint: 5000
          }
        }
      })

      // @ts-ignore
      wrapper.vm.handleResize()
      // @ts-ignore
      expect(wrapper.vm.showHamburger).toBe(false)
    })
  })
})
