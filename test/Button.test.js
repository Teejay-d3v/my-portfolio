import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Button from '../components/Button.vue' // make sure path is correct

describe('Button.vue', () => {
  it('renders label correctly', () => {
    const wrapper = mount(Button, { props: { label: 'Click Me' } })
    expect(wrapper.text()).toBe('Click Me')
  })

  it('emits click event', async () => {
    const wrapper = mount(Button, { props: { label: 'Click Me' } })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})
