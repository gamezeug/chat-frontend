import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Chat from '@/components/Chat.vue'

describe('Chat.vue', () => {
  it('renders a Send button when started', () => {
    const msg = 'Send'
    const wrapper = shallowMount(Chat, {
      propsData: {}
    })
    expect(wrapper.text()).to.include(msg)
  })
})
