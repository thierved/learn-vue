import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

describe('Header.vue', () => {
  it('renders props.msg when passed', () => {
    const arbitraryTitle = 'arbitrary title'
    const wrapper = shallowMount(Header, {
      props: { 
        title: arbitraryTitle,
      }
    })
    const expectedTitle = arbitraryTitle
    expect(
      wrapper.get('h1').text()
    ).toMatch(
      expectedTitle
    )
  })
})
