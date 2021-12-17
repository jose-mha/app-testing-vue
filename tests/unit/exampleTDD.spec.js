import { mount } from '@vue/test-utils';

import Example from '@/Example.vue';

const wrapper = mount(Example);

describe('Probar que se cambió la propiedad changeTest ', () => {
  test('should click a button', () => {
    const lastValue = wrapper.vm.changeTest;

    wrapper.find('button').trigger('click');

    expect(wrapper.vm.changeTest).toBe(lastValue + 1);
  });
});
