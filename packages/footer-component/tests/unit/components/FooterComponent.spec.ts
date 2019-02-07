import { shallowMount } from '@vue/test-utils'
import FooterComponent from '../../../src/components/FooterComponent.vue'
import molgenisFooter from '../../../src/exampleFooter'
jest.mock('@molgenis/molgenis-api-client')

describe('FooterComponent.vue', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(FooterComponent, {
      propsData: { molgenisFooter }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should render additionalMessage as html', () => {
    const wrapper = shallowMount(FooterComponent, {
      propsData: { molgenisFooter }
    })
    expect(wrapper.find('.mg-additional-footer-message').text()).toBe('some additionalMessage')
  })
})
