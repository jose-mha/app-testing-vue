/* import { mount } from '@vue/test-utils';
import App from '@/App.vue';

const wrapper = mount(App);
const vm = wrapper.vm;

console.log(vm.$data);
*/
import { huevo, espinaca } from './jestTest';

describe('Se va a probar la calidad de los ingredientes', () => {
  test('Calidad del huevo', () => {
    expect(huevo().estado[0]).toBe('fresco');
  });

  test('Calidad de la espinaca', () => {
    expect(espinaca()).toEqual({
      estado: 1,
      color: 'verde',
    });
  });
});
